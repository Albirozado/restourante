/** @type {import('next').NextConfig} */
import whitPlaiceholder from "@plaiceholder/next"
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

export default whitPlaiceholder(nextConfig)
 
//