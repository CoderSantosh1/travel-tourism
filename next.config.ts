import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { agentUpgrade: "security" },
  images: { qualities: [75, 90] },
};

export default nextConfig;
