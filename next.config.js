/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin")

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = stylexPlugin({
  rootDir: __dirname,
})((nextConfig));