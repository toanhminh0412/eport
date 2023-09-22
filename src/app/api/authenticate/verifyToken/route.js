// Next imports
import { NextResponse } from "next/server";

// Local imports
import { getUserFromToken } from "@/helpers/authentication";

/* Verify user token in parsed from request headers
Return: decoded user object
*/
export function GET(request) {
    console.log('In verifyToken route');
    const requestHeaders = new Headers(request.headers);
    const userToken = requestHeaders.get('x-forward-token');
    return NextResponse.json(
        {user: getUserFromToken(userToken)}
    )
}