import Link from "next/link";
import Head from "next/head";
import { Space_Mono } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

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
  return (
    <div className={`${space_mono.variable}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="font-mono h-screen bg-secondary">
        <div className="mx-auto max-w-[327px] pt-8 md:max-w-[573px] lg:max-w-[730px]">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
