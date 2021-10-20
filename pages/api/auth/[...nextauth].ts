import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { prisma } from '../../../lib/prisma'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  adapter: Adapters.Prisma.Adapter({ prisma }),
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id as number
      return Promise.resolve(session)
    },
  },
})
