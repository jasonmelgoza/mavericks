import { styled } from "../stitches.config.js";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

import "../styles/global.css";

import { Layout } from "../components";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const Heading = styled("h1", {
  marginBottom: "$9",
  textAlign: "left",
  fontFamily: "$sans",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg",

  "@bp1": {
    fontSize: "2rem"
  }
});

const components = {
  img: ResponsiveImage,
  h1: Heading
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}
