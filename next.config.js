/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin")

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    domains: ['res.cloudinary.com']
  },
}

module.exports = stylexPlugin({
  rootDir: __dirname,
})((nextConfig));