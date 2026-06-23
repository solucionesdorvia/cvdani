import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto para el file tracing (evita que Next infiera
  // mal el root por lockfiles externos, importante para el deploy).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
