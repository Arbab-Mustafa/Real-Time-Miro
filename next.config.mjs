/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // without colon
        hostname: "img.clerk.com", // ensure hostname is correct
        pathname: "/**", // match all paths
      },
    ],
  },
};

export default nextConfig;
