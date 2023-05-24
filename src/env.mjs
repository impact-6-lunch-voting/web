import {z} from "zod";
import {createEnv} from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
      GITHUB_CLIENT_ID: z.string().min(1),
      GITHUB_CLIENT_SECRET: z.string().min(1),
    NEXTAUTH_SECRET:
       process.env.NODE_ENV === "production"
         ? z.string().min(1)
        : z.string().min(1).optional(),
     NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string().min(1) : z.string().url()),

  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
        NEXT_PUBLIC_API_BASE_URL: z.string().url().min(1)
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
     NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
     NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    // DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
});
