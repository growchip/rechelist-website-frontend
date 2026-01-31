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
};

export default nextConfig;
