/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: 'public',
  cacheOnFrontEndNav : true,
  aggresiveFrontEndNavCaching : true,
  reloadOnOnline : true,
  swcMinify : true,
  disable : false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
});
