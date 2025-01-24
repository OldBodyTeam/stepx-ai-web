import { p } from "motion/react-client";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NODE_ENV === "production" ? "/web" : "",
};

export default nextConfig;
