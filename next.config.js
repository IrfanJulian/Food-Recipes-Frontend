/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    profile: process.env.URL_PROFILE
  }
}

module.exports = nextConfig
