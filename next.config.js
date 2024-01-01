/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['apod.nasa.gov', 'images-api.nasa.gov', 'images-assets.nasa.gov'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
        pathname: '/apod.nasa.gov/apod/image/2401',
      },
      {
        protocol: 'https',
        hostname: 'images-api.nasa.gov',
        port: '',
        pathname: '/image',
      },
    ],
  },
};
