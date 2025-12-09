/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@chakra-ui',
    '@emotion',
    'lucide-react',
    '@lshay/ui',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4.5mb',
    },
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
