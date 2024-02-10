import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import CredentialsProvider from "next-auth/providers/credentials";
const adapter = PrismaAdapter(db) as any;

const authOptions: NextAuthOptions = {
  adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log("user is", user);
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token }) {
      const userObj = await db.admin.findUnique({
        where: {
          id: token.sub as string,
        },
      });
      const username = userObj?.username;
      token.username = username;
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.username as string;
      }
      return session;
    },
  },
};

export default authOptions;
