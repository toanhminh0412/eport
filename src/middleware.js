import { NextResponse } from "next/server";

import { db } from "../public/libs/firebase";

import { getDoc, doc } from "firebase/firestore";

export async function middleware(request) {
    const PROTECTED_PATHS = ['/', '/confirm_email', '/demo/demo1'];
    console.log('Calling this middleware');

    if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
        // Check if user is logged in, redirect to login page if not
        if (!request.cookies.get('eport-uid')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const userId = request.cookies.get('eport-uid').value;
        const user = (await getDoc(doc(db, 'users', userId))).data();

        // Log user out if user is not found
        if (!user && request.nextUrl.pathname !== '/api/authenticate/logout') {
            return NextResponse.redirect(new URL('/api/authenticate/logout', request.url));
        }

        if (!user.emailVerified) {
            if (request.nextUrl.pathname !== '/confirm_email') {
                return NextResponse.redirect(new URL('/confirm_email', request.url));
            }
        } else {
            // Redirect to dashboard if user already confirmed email and visit '/confirm_email'
            if (request.nextUrl.pathname === '/confirm_email') {
                return NextResponse.redirect(new URL('/', request.url));
            }
        }

    } else {
        // If a logged in user visit '/login' or '/signup', redirect to home page
        if (request.cookies.get('eport-uid') && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


    const response = NextResponse.next();
    return response;
}

export const config = {
    matcher: ['/', '/confirm_email', '/demo/:path*', '/login', '/signup'],
}