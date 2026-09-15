import { User } from "@/types/user";
import NextAuth, { type NextAuthConfig } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

const mockUser: User = {
  id: "11111111-1111-4111-8111-111111111111",
  email: "johndoe@example.com",
  name: "John Doe",
  isEmailVerified: true,
  phone: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        return {
          id: mockUser.id,
          email: mockUser.email,
          name: mockUser.name,

          // Custom fields
          isEmailVerified: mockUser.isEmailVerified,
          phone: mockUser.phone,
          createdAt: mockUser.createdAt,
          updatedAt: mockUser.updatedAt,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email!,
          name: user.name ?? null,
          isEmailVerified: false,
          phone: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
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

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 150));

  return mockUser;
}

export async function signUpAction({
  name,
  email,
  password,
}: {
  name?: string;
  email: string;
  password: string;
}): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 150));

  return mockUser;
}
