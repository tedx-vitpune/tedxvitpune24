/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'res.cloudinary.com' ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/speaker-nomination',
        destination: 'https://forms.gle/WWS1JkCdwN5LTinc8',
        permanent: true,
      },
      {
        source: '/tickets-vit',
        destination: 'https://learner.vierp.in',
        permanent: true,
      },
      {
        source: '/tickets-non-vit',
        destination: 'https://learner.vierp.in/events',
        permanent: true,
      },
      {
        source: '/tedx-insta-vit',
        destination: 'https://www.instagram.com/direct/t/118676629526454',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
