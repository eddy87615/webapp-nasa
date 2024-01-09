/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      'apod.nasa.gov',
      'images-api.nasa.gov',
      'images-assets.nasa.gov',
      'mars.jpl.nasa.gov',
      'mars.nasa.gov',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'images-api.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'mars.jpl.nasa.gov',
      },
    ],
  },
};
