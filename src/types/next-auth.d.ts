import { User as CustomUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: CustomUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: CustomUser;
  }
}