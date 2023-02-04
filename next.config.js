/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["juniando-backend-production.up.railway.app"],
  },
};

module.exports = {};

module.exports = nextConfig;
