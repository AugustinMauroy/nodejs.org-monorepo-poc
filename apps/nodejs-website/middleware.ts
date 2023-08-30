import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const acceptLanguage = request.headers.get('accept-language') || 'en-US,en;q=0.9'

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/' + acceptLanguage.split(';')[0].split(',')[1], request.nextUrl));
    }
}

export const config = { matcher: '/' };
