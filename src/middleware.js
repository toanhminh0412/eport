import { NextResponse } from "next/server";

export async function middleware(request) {
    const PROTECTED_PATHS = ['/', '/confirm_email', '/demo/demo1'];

    if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
        // Check if user is logged in, redirect to login page if not
        if (!request.cookies.get('eport-uid')) {
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