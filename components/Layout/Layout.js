import Head from "next/head";
import { globalCss } from "../../stitches.config";

import Header from "../Header";
import Footer from "../Footer";

const globalStyles = globalCss({
  fontFamily: "$sans"
});

export default function Layout({ children }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Jason Melgoza</title>
        <meta name="description" content="Jason Melgoza" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
