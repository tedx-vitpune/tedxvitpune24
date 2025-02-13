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
      {
        source: '/talks-2024',
        destination: 'https://youtube.com/playlist?list=PL0687I2dEWcnon3HpyIKl_WW_UTvHx95-&si=96mK66IVKiw8vYrn',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
