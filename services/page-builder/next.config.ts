/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 린트 에러가 나와도 빌드를 성공
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 타입 에러가 나와도 빌드를 성공
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
