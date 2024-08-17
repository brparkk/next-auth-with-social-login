import NextAuth, { AuthOptions } from 'next-auth';

const authOptions: AuthOptions = {
  providers: [],
};

const handler = NextAuth(authOptions);

export { handler as Get, handler as POST };
