/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.amikomsolo.ac.id'
            }
        ]
    }
};

export default nextConfig;
