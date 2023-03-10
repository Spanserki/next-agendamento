import { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react"
import { PrismaAdapter } from "../../../lib/auth/prisma-adapter"

export function builNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',

        authorization: {
          params: {
            scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
          }
        }
      }),
    ],
    callbacks: {
      async signIn({ account }) {
        if (!account?.scope?.includes('https://www.googleapis.com/auth/calendar')) {
          return '/ConnectGoogle/?error=permissions'
        }

        return true
      }
    }
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, builNextAuthOptions(req, res))
}