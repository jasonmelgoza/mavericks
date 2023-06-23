import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  theme: {
    colors: {
      hiContrast: "#ededed",
      loContrast: "#949494",
      bg: "#282828",
      secondaryBg: "#f3f4f6"
    },
    fonts: {
      sans: "system-ui, sans-serif"
    }
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)"
  }
});

const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box"
  },

  "*": { margin: 0 },

  "html, body": {
    height: "100%"
  },

  body: {
    lineHeight: 1.5,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
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
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 1.5,

    "&:not(:last-child)": {
      marginBottom: "calc(1em / 0.75)"
    },

    "@bp1": {
      fontSize: "$medium"
    }
  },

  "#__next": {
    isolation: "isolate"
  },

  body: {
    fontFamily: "$sans",
    color: "$hiContrast",
    backgroundColor: "$bg"
  },

  a: {
    color: "blue",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline"
    }
  }
});

globalStyles();
