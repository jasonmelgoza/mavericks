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
      hiContrast: "#000",
      loContrast: "#555",
      bg: "white",
      secondaryBg: "#eee"
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
    fontSize: "$normal",
    fontWeight: "$1",
    lineHeight: "$2",

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
  }
});

globalStyles();
