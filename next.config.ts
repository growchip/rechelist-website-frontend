import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rechelist.whdev.in",
        pathname: "/storage/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rechelistpharma.com',
          },
        ],
        destination: 'https://www.rechelistpharma.com/:path*',
        permanent: true, // This triggers the 301 status code
      },
    ]
  },
};

export default nextConfig;
