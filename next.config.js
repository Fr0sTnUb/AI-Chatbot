/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Increase the body size limit for API routes to handle image payloads
  experimental: {
    serverComponentsExternalPackages: ['@google/generative-ai'],
  },
}

module.exports = nextConfig 