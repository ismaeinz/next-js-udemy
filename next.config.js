/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com"],
  },
  env: {
    MONGO_URL:
      "mongodb+srv://ismaeinqasem:ismaein@cluster0.8l7eirz.mongodb.net/products-app",
    APP_DEV: "http://localhost:3000",
    APP_PROD: "http://next-js-udemy.vercel.app",
  },
};
module.exports = nextConfig;
