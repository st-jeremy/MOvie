/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname:  "m.media-amazon.com",
//         port: '',
//         pathname: '/images/**',
//       },
//     ],
//   },
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['m.media-amazon.com'],
  },
}
