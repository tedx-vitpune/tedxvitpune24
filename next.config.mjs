/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ]
  },
};

export default nextConfig;
