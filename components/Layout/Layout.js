import Head from "next/head";
import { globalCss } from "../../stitches.config";

import Header from "../Header";
import Footer from "../Footer";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },

  "body, html": {
    height: "100%",
    padding: "0",
    margin: "0"
  },

  body: {
    fontFamily: "$sans",
    lineHeight: "1.5",
    textSizeAdjust: "100%",
    "-webkit-font-smoothing": "antialiased"
  }
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
      <div>{children}</div>
      <Footer />
    </>
  );
}
