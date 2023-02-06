/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["juniando-backend-production.up.railway.app", "localhost"],
  },
};

module.exports = {};

module.exports = nextConfig;
