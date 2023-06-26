import splitbee from "@splitbee/web";
import localFont from "next/font/local";
import { globalCss } from "../stitches.config";
import { Layout } from "../components";

const myFont = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic"
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic"
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal"
    }
  ]
});

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },

  "*, *::before, *::after": {
    boxSizing: "border-box"
  },

  "html, body": {
    height: "100%",
    padding: "0",
    margin: "0"
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

  img: {
    height: "auto"
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

  p: {
    fontSize: "$medium",
    fontWeight: "$medium",
    lineHeight: "$normal",

    "&:not(:last-child)": {
      marginBottom: "calc(1em / 0.75)"
    },

    "@bp1": {
      fontSize: "$normal"
    }
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

export default function MyApp({ Component, pageProps }) {
  splitbee.init();
  globalStyles();
  return (
    <Layout className={myFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
