/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cards.scryfall.io" }],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
