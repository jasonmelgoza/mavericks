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
        <meta
          content="Jason Melgoza — I'm product designer focusing on visual design and design systems"
          name="description"
        />
        <meta name="author" content="Jason Melgoza" />
        <meta content="website" property="og:type" />
        <meta content="https://www.jmelgoza.com/" property="og:url" />
        <meta
          content="Jason Melgoza — Interface Designer"
          property="og:site_name"
        />
        <meta
          content="Jason Melgoza — Interface Designer"
          property="og:title"
        />
        <meta
          content="Jason Melgoza — I'm product designer focusing on visual design and design systems"
          property="og:description"
        />
        <meta
          content="product designer, designer, interface, ui design, ux design, design systems, minimal, jasonmelgoza, jason melgoza"
          name="keywords"
        />
        <meta
          content="https://www.jmelgoza.com/images/me.png"
          property="og:image"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
