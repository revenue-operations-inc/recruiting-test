import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  distDir: isProd ? ".next-build" : ".next",
  outputFileTracingRoot: __dirname,
  transpilePackages: ["mock-sdr-api"],
};

export default nextConfig;
