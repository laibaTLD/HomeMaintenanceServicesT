import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const baseUrl = process.env.API_BASE_URL || 'https://sitifystudio.com/api';
    return [
      {
        source: '/api/:path*',
        destination: `${baseUrl}/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${baseUrl}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
