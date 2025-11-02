/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Make sure this matches your repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;