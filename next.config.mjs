/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['utfs.io'], // ✅ allow UploadThing image URLs
    formats: ['image/avif', 'image/webp'], // serve modern, much smaller formats
    minimumCacheTTL: 31536000, // cache optimized images for 1 year
  },
}

export default nextConfig;
