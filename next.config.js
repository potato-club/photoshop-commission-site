/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['photoshopcommission.s3.ap-northeast-2.amazonaws.com'],
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
