/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/test2', // Proxy to Backend
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'auth',
            value: '1',
          },
        ],
        permanent: false,
        destination: '/test3',
      },
    ];
  },
};

module.exports = nextConfig;
