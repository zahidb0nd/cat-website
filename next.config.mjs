import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // ─── Security Headers (OWASP Best Practices) ──────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Block MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Enable XSS filter
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Control referrer information
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=()',
          },
          // Strict Transport Security (HTTPS enforcement)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://open.er-api.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://open.er-api.com https://www.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default withPWA(nextConfig);
