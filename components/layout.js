import Link from "next/link";
import Head from "next/head";
import { Space_Mono } from "next/font/google";
import ThemeContext from "./theme";
import { Fragment, useContext } from "react";

const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const Layout = ({
  children,
  title = "Frontend Mentor | GitHub user search app",
}) => {
  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

  return (
    <div className={`${space_mono.variable}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-screen bg-primary">
        <header>
          <div className="h-fit">
            <button
              type="button"
              className="ml-auto mr-4 block rounded bg-zinc-800 px-2 py-1 text-white dark:bg-zinc-200 dark:text-black sm:px-5 sm:py-2.5"
              onClick={toggleThemeHandler}
            >
              Toggle Theme
            </button>
          </div>
        </header>
        {children}
        <footer className="text-center">
          Challenge by&nbsp;
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link href="https://po-cheng-yeh.vercel.app/" target="_blank">
            Po-Cheng Yeh
          </Link>
          .
        </footer>
      </main>
    </div>
  );
};

export default Layout;
