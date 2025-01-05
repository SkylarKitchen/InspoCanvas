import { auth } from "@clerk/nextjs";

export default auth;

// Required for Next.js middleware
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};