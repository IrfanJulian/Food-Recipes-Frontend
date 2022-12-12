/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_PROFILE : 'https://strange-red-gaiters.cyclic.app/user/profile',
    URL_GET_RECIPES : `https://strange-red-gaiters.cyclic.app/recipe`,
    URL_UPDATE_PROFILE_PICT : `https://strange-red-gaiters.cyclic.app/user`,
    URL_DETAIL_ID : `https://strange-red-gaiters.cyclic.app/recipe`,
    URL_LOGIN : `https://strange-red-gaiters.cyclic.app/user/login`,
    URL_REGISTER : `https://strange-red-gaiters.cyclic.app/user/register`
  }
}

module.exports = nextConfig
