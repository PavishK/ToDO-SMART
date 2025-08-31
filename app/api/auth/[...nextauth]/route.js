import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session:{
        strategy:'jwt',
        maxAge: 7 * 24 * 60 * 60,
    },
}

const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}