/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["moccasin-careful-snipe-849.mypinata.cloud"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moccasin-careful-snipe-849.mypinata.cloud",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
