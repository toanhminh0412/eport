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
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/eport-29971.appspot.com/o/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            }
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/features',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
