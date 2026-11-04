import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images in /public are already optimised WebP. Serving them directly avoids the
  // on-the-fly image resizer, which returned 502s on small hosts (Embarko).
  images: { unoptimized: true },
};

export default nextConfig;
