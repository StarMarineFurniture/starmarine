import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Disable external image optimization to prevent easy access
    disableStaticImages: false,
    // Add security for image loading
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
    // Limit image formats
    formats: ['image/webp', 'image/avif'],
  },
  // Security headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        // Apply to image files specifically
        source: '/:path*.(jpg|jpeg|png|gif|webp|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
