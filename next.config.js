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
  filename: 'stylex-bundle.css',
  // rootDir: __dirname,
  rootDir: process.cwd(),
  useCSSLayers: true,
})((nextConfig))