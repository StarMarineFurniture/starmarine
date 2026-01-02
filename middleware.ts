import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers to prevent image downloading
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'no-referrer');
  
  // Prevent hotlinking of images
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  
  // If it's an image request and not from your own domain, block it
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    if (referer && !referer.includes(host || '')) {
      return new NextResponse('Forbidden', { status: 403 });
    }
    
    // Add cache control for images to prevent easy downloading
    response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  // Add Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};