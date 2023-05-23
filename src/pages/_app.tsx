import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter, Syne } from "next/font/google";

import "~/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={(fontSans.variable, fontHeading.variable)}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
