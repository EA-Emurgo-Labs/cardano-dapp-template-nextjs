/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tokenize",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
