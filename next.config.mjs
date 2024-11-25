/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: false,  // Esto desactiva el uso de la carpeta `app`
    },
};

export default nextConfig;
