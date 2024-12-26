/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/to-your-future-self',
        destination: 'https://forms.gle/Vmd8Uc4dJHQzQjvK8',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
