import { NextResponse } from "next/server";

import { db } from "../public/libs/firebase";

import { getDoc, doc } from "firebase/firestore";

export async function middleware(request) {
    const PROTECTED_PATHS = ['/', '/confirm_email', '/demo/demo1'];
    console.log('Calling this middleware');

    if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
        console.log('Detect protected path');
        // Check if user is logged in, redirect to login page if not
        if (!request.cookies.get('eport-uid')) {
            console.log('User is not logged in');
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const userId = request.cookies.get('eport-uid').value;
        const user = (await getDoc(doc(db, 'users', userId))).data();
        console.log(user);

        // Log user out if user is not found
        if (!user && request.nextUrl.pathname !== '/api/authenticate/logout') {
            console.log('User not found. Loggined user out...');
            return NextResponse.redirect(new URL('/api/authenticate/logout', request.url));
        }

        if (!user.emailVerified) {
            console.log('User has not veried email, redirect to confirm email page')
            if (request.nextUrl.pathname !== '/confirm_email') {
                return NextResponse.redirect(new URL('/confirm_email', request.url));
            }
        } else {
            console.log('User has veried email, redirect to dashboard')
            // Redirect to dashboard if user already confirmed email and visit '/confirm_email'
            if (request.nextUrl.pathname === '/confirm_email') {
                return NextResponse.redirect(new URL('/', request.url));
            }
        }

    } else {
        console.log('Detect unprotected path');
        // If a logged in user visit '/login' or '/signup', redirect to home page
        if (request.cookies.get('eport-uid') && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    console.log('Return a response');

    const response = NextResponse.next();
    return response;
}

export const config = {
    matcher: ['/', '/confirm_email', '/demo/:path*', '/login', '/signup'],
}