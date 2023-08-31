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

        if (!request.cookies.get('eport-email-verified')) {
            return NextResponse.redirect(new URL('/api/authenticate/logout', request.url));
        }

        const emailVerified = request.cookies.get('eport-email-verified').value;
        if (!emailVerified || emailVerified === 'false') {
            if (request.nextUrl.pathname !== '/confirm_email') {
                return NextResponse.redirect(new URL('/confirm_email', request.url));
            }
        } else {
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