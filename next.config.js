/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@mui/x-charts",
    "@mui/x-charts-vendor",
    "@mui/x-charts-pro",
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
