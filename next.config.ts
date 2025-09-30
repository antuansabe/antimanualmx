import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  // experimental: {
  //   optimizePackageImports: ['framer-motion', 'leaflet', 'recharts'],
  // },

  // Temporalmente deshabilitar TypeScript checking para debugging
  typescript: {
    ignoreBuildErrors: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle analyzer for debugging (optional)
  // bundlePagesRouterDependencies: true,
};

export default nextConfig;
