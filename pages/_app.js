import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

import "../styles/global.css";
import "../styles/fonts.css";
import { styled } from "../stitches.config.js";
import { Layout } from "../components";
import "../styles/fonts.css";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },

  "*, *::before, *::after": {
    boxSizing: "border-box"
  },

  "html, body": {
    height: "100%",
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
  },

  body: {
    fontFamily: "$sans",
    lineHeight: "1.5",
    textSizeAdjust: "100%",
    "-webkit-font-smoothing": "antialiased"
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%"
  },

  "input, button, textarea, select": {
    font: "inherit"
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word"
  },

  a: {
    color: "inherit",
    textDecoration: "none"
  },

  "#root, #__next": {
    isolation: "isolate"
  },

  ".visually-hidden:not(:focus):not(:active)": {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  }
});

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
  globalStyles();
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}
