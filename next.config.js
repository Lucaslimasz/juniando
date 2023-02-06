/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["juniando-backend-production.up.railway.app", "localhost", "estudotest.s3.sa-east-1.amazonaws.com"],
  },
};

module.exports = {};

module.exports = nextConfig;
