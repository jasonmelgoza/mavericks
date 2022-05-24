import splitbee from '@splitbee/web';
import { globalCss } from "../stitches.config";
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
