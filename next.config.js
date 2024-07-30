 const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  // Add a proxy middleware for the API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hamsfly-server-v1-0-0.onrender.com/api/:path*' // Proxy to the Express server
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pics.avs.io",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      // {
      //   protocol: 'https',
      //   hostname: '',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};