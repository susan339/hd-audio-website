import type { NextConfig } from "next";

const nextConfig: NextConfig = { typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true }, typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
    ],
  },
};

export default nextConfig;