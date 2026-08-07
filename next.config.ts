import type { NextConfig } from "next";

function getRemotePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) return [];

  try {
    const url = new URL(baseUrl);
    return [
      {
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        port: url.port || undefined,
        pathname: "/**",
      },
    ];
  } catch {
    return [];
  }
}

const remotePatterns = getRemotePatterns() ?? [];

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
    // Allow builds when API host is unset or non-standard (dynamic CMS URLs).
    ...(remotePatterns.length === 0 ? { unoptimized: true } : {}),
  },
  async rewrites() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error('NEXT_PUBLIC_API_BASE_URL environment variable is required');
    }

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
