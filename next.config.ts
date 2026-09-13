import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/resume", destination: "/resume.pdf", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Adi-Vishnu-Avula-Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
