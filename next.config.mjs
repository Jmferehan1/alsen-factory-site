/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This instructs the compiler to ignore ESLint warnings during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;