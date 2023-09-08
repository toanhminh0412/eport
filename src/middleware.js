import { NextResponse } from "next/server";

export async function middleware(request) {
    /*** Authentication ***/
    const PROTECTED_PATHS = ['/', '/confirm_email', '/demo/demo1', '/manage_subscriptions'];

    if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
        // Check if user is logged in, redirect to login page if not
        if (!request.cookies.get('eport-uid')) {
            return NextResponse.redirect(new URL('/features', request.url));
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

    /*** Plan ***/
    if (request.nextUrl.pathname === '/manage_subscriptions') {
        if (!request.cookies.get('eport-plan')) {
            return NextResponse.redirect(new URL('/api/stripe/set_plan_cookie', request.url));
        }
    }
    
    const response = NextResponse.next();
    return response;
}

export const config = {
    matcher: ['/', '/confirm_email', '/demo/:path*', '/login', '/signup', '/manage_subscriptions'],
}