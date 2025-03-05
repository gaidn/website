import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

/**
 * NextAuth.js configuration for authentication.
 * This setup uses GitHub OAuth for authentication.
 */
export default NextAuth({
  // Configure authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Additional providers can be added here
  ],
  
  // Security settings
  secret: process.env.NEXTAUTH_SECRET,
  
  // Session configuration
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Callback functions
  callbacks: {
    // Customize the JWT creation process
    async jwt({ token, account, user }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          userId: user.id,
        };
      }
      return token;
    },
    
    // Customize session object
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  
  // Pages configuration - use custom pages if needed
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    // newUser: '/auth/new-user' // New users will be directed here on first sign in
  },
});