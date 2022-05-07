import Head from "next/head";
import { globalCss, styled } from "../../stitches.config";
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
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$bg"
  }
});

const Main = styled("main", {
  paddingTop: "$9",

  "@bp1": {
    paddingTop: "$6"
  }
});

export default function Layout({ children }) {
  globalStyles();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Jason Melgoza</title>
        <meta
          name="description"
          content="I'm product designer focusing on visual design and design systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
