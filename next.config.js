/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['photoshopcommission.s3.ap-northeast-2.amazonaws.com'],
    loader: 'akamai',
    path: '',
  },
  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_PATHNAME: process.env.NEXT_PUBLIC_PATHNAME,
    NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
    NEXT_PUBLIC_RESPONSE_TYPE: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
  },
};

module.exports = nextConfig;
