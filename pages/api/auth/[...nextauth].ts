import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions);
export default authHandler;

export const authOptions = {
  // Configure one or more authentication providrs
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : "undefined",
      clientSecret: process.env.GITHUB_SECRET
        ? process.env.GITHUB_SECRET
        : "undefined",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // async session({ session, user }: { session: any; user: any }) {
    //   session.user.id = user.id;
    //   return session;
    // },
  },
};
