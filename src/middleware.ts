import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This is the function can be marked 'async' is using 'await' inside

export function middleware(request : NextRequest){

    const path = request.nextUrl.pathname;
    const isPublicPath = path === ("/login" || "/singup") ? true : false;
    const token = request.cookies.get("token")?.value || "";
    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/userProfile/", request.nextUrl))
    }   

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}

// See "Matching path" below to learn more
export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/userProfile",
    ],
}