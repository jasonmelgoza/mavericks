import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import { styled } from "../stitches.config.js";
import { Layout } from "../components";
import "../styles/fonts.css";
import "../styles/global.css";

const StyledImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const StyledHeading = styled("h1", {
  marginBottom: "$9",
  textAlign: "left",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg",

  "@bp1": {
    marginBottom: "$6",
    fontSize: "2rem"
  }
});

const StyledText = styled("p", {
  fontSize: "$medium",
  fontWeight: "$medium",
  lineHeight: "$normal",

  "&:not(:last-child)": {
    marginBottom: "1rem"
  },

  "@bp1": {
    fontSize: "$normal"
  }
});

const StyledLink = styled("a", {
  position: "relative",
  color: "$primary",
  transition: "color 0.15s ease-in",

  "&:before": {
    content: "",
    position: "absolute",
    bottom: "-4px",
    left: "0",
    right: "0",
    height: "2px",
    backgroundColor: "$primary",
    transformOrigin: "bottom right",
    transform: "scaleX(0)",
    transition: "transform 0.5s ease"
  },

  "&:hover": {
    color: "$primary",

    "&:before": {
      transformOrigin: "bottom left",
      transform: "scaleX(1)"
    }
  }
});

const StyledList = styled("ul", {
  paddingLeft: "1.25rem",
  fontSize: "$medium",
  fontWeight: "$medium",
  lineHeight: "$normal",

  "&:not(:last-child)": {
    marginBottom: "1rem"
  },

  "@bp1": {
    fontSize: "$normal"
  }
});

const components = {
  img: StyledImage,
  h1: StyledHeading,
  p: StyledText,
  ul: StyledList,
  a: StyledLink
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
