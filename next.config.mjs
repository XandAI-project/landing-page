/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable static exports for easy deployment
  reactStrictMode: true,
  // Performance optimizations
  swcMinify: true,
}

export default nextConfig

