/** @type {import('next').NextConfig} */
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  withImages: withImages({
    webpack(config, options) {
      return config
    },
    // esModule: true,
  })
}
