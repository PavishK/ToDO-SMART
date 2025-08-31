/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
    remotePatterns:[
    {
        hostname:"www.svgrepo.com",
        protocol:"https"
    },
    {
        hostname:"lh3.googleusercontent.com",
        protocol:"https"
    },
],
   },
};

export default nextConfig;
