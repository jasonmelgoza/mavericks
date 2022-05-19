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

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jason Melgoza" />
        <meta
          name="description"
          content="I'm product designer focusing on visual design, design systems, and iconography"
        />
        <meta
          name="keywords"
          content="product designer, designer, interface, ui design, ux design, design systems, minimal, jasonmelgoza, jason melgoza"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jmelgoza.com/" />
        <meta
          property="og:site_name"
          content="Jason Melgoza — Interface Designer"
        />
        <meta
          property="og:title"
          content="Jason Melgoza — Interface Designer"
        />
        <meta
          property="og:description"
          content="I'm product designer focusing on visual design, design systems, and iconography"
        />
        <meta
          property="og:image"
          content="https://www.jmelgoza.com/images/me.png"
        />
        <title>Jason Melgoza</title>
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
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
