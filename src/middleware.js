import { NextResponse } from "next/server";

export async function middleware(request) {
    /*** Authentication ***/
    const PROTECTED_PATHS = ['/', '/confirm_email', '/demo/demo1', '/manage_subscriptions'];

    // Get user from jwt token in cookie
    const userResponse = await fetch(new URL('/api/authenticate/verifyToken', request.url), {
        method: 'GET',
        headers: {
            'X-forward-token': request.cookies.get('eport-token') ? request.cookies.get('eport-token').value : null,
        }
    });
    const data = await userResponse.json();
    const user = data.user;

    if (PROTECTED_PATHS.includes(request.nextUrl.pathname)) {
        // Check if user is logged in, redirect to login page if not
        if (!user) {
            // Log user out if user is logged in with an invalid token
            if (request.cookies.get('eport-token')) {
                return NextResponse.redirect(new URL('/api/authenticate/logout', request.url));
            }
            // Otherwise redirect user to 'features' page
            console.log("Before redirecting to '/features'");
            return NextResponse.redirect(new URL('/features', request.url));
        }

        if (user.emailVerified === undefined) {
            return NextResponse.redirect(new URL('/api/authenticate/logout', request.url));
        }

        if (!user.emailVerified || user.emailVerified === 'false') {
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
        if (user && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    /*** Plan ***/
    if (request.nextUrl.pathname === '/manage_subscriptions') {
        if (!user.plan) {
            return NextResponse.redirect(new URL('/api/stripe/set_plan_cookie', request.url));
        }
    }
    
    const response = NextResponse.next();
    return response;
}

export const config = {
    matcher: ['/', '/confirm_email', '/demo/:path*', '/login', '/signup', '/manage_subscriptions'],
}