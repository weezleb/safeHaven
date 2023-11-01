/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
        CONSUMER_KEY: process.env.CONSUMER_KEY,
        GITHUB_ID: process.env.GITHUB_ID ,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        BACKEND_URL: process.env.BACKEND_URL
    },
    // {
    // },
    //     async headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: "/api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
    //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //             ]
    //         }
    //     ]
    // }
}




module.exports = nextConfig
