import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 警告：这会让你的项目即使有 ESLint 错误也能打包成功
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
