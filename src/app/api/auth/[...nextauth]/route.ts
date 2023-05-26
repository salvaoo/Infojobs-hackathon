import NextAuth, { type NextAuthOptions } from "next-auth"
import InfojobsProvider from "infojobs-next-auth-provider"

export const authOptions: NextAuthOptions = {
   providers: [
      InfojobsProvider({
        clientId: process.env.IJ_CLIENT_ID ?? "",
        clientSecret: process.env.IJ_CLIENT_SECRET ?? "",
        redirect_uri: process.env.IJ_CALLBACK_URL ?? "",
        infojobs_scopes:
          "CV,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_CVTEXT,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_SKILLS",
      }),
    ],
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
          token.refreshToken = account.refresh_token;
        }
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken as string
        session.refreshToken = token.refreshToken as string
        return session;
      },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };