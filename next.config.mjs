/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "ipfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
