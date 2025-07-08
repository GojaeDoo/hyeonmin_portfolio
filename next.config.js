/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design/icons", "@ant-design/cssinjs"],
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ant-design/icons/lib/dist$": "@ant-design/icons/lib/dist/index.es.js",
    };
    return config;
  },
};

module.exports = nextConfig;
