import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
    ],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
