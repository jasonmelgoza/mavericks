import Head from "next/head";
import { styled } from "../../stitches.config";
import Header from "../Header";
import Footer from "../Footer";

const Main = styled("main", {
  paddingTop: "$9",

  "@bp1": {
    paddingTop: "$6"
  }
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "50rem",
  margin: "0 auto"
});

const Content = styled("div", {
  paddingLeft: "64px",
  paddingRight: "64px",
  width: "100%",

  "@bp1": {
    paddingLeft: "48px",
    paddingRight: "48px"
  }
});

export default function Layout({ children }) {
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
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Black.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Main>
        <Box>
          <Content>{children}</Content>
        </Box>
      </Main>
      <Footer />
    </>
  );
}
