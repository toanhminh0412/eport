/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/eport-4141e.appspot.com/o/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            }
        ],
    }
}

module.exports = nextConfig
