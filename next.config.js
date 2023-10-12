/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "www.thestreet.com",
        pathname: "/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTk5MDQyNTAwMjA2Mjc0NTE2/amazon-fire-hd-10.jpg"
      }
    ],
  },
};

module.exports = nextConfig
