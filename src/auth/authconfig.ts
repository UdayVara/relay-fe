import { User } from "@/types/user";
import NextAuth, { type NextAuthConfig } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateCredentials } from "../actions/auth.actions"


export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // Call server-side action which uses the shared auth service
        const res = await validateCredentials(credentials.email as string, credentials.password as string)

        if (!res || !res.ok) return null

        // API may return user under different shapes; attempt to normalize
        const payload: any = res.data?.data ?? res

        const userFromApi = payload.user ?? payload
        console.log("User from API:", userFromApi)
        if (!userFromApi || !userFromApi.email) return null

        return {
          id: userFromApi?.id,
          email: userFromApi.email,
          name: userFromApi.name ?? null,
          isEmailVerified: userFromApi.isEmailVerified ?? false,
          phone: userFromApi.phone ?? null,
          createdAt: userFromApi.createdAt ?? new Date().toISOString(),
          updatedAt: userFromApi.updatedAt ?? new Date().toISOString(),
          token: payload.token ?? null,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as User & { token?: string | null };

        token.user = {
          id: authUser.id,
          email: authUser.email!,
          name: authUser.name ?? null,
          isEmailVerified: authUser.isEmailVerified ?? false,
          phone: authUser.phone ?? null,
          createdAt: authUser.createdAt ?? new Date().toISOString(),
          updatedAt: authUser.updatedAt ?? new Date().toISOString(),
          token: authUser.token ?? null,
        };
      }

      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as AdapterUser & User;
      }

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);


