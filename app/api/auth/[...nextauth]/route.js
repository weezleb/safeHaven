import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";

let user = {}

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        Credentials({
            name: 'Custom Login',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            authorize: async(credentials, req) => {
                const {username, password} = credentials
                const backendUrl = process.env.BACKEND_URL
                try {
                    const response = await fetch(`${backendUrl}/login/credential`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        username,
                        password,
                      }),
                    })
                    if(response.ok){
                        const userData = await response.json()
                        if (userData) {
                             user = {
                                username: userData.userData.username,
                                memberSince: userData.userData.memberSince,
                                id: userData.userData.id
                            }
                            console.log(user);
                            return {
                                status: "SUCCESS",
                                data: user
                            }
                        }
                    }
                    return Promise.resolve(null)
            }catch (error) {
                console.error(error)
                return Promise.resolve(null)
            }
        },
        })
    ], callbacks: {
        session: async ({session}) => {
            session.user = {
                username: user.username,
                memberSince: user.memberSince,
                id: user.id
            }
            return Promise.resolve(session)
        }
    } 
    // session: {
    //     jwt: false,
    //     callback: async (session, user) => {
    //       session.user.id = user.id
    //       const info = {
    //         username: user.username,
    //         memberSince: user.memberSince,
    //         id: user.id
    //     }
    //       return {
    //         session: {
    //             user: info
    //         }
    //     };
    //     },
    //   },
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}