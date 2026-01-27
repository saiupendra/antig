import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize production builds
  poweredByHeader: false,
  compress: true,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig