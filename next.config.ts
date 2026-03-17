import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;