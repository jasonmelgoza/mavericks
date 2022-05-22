import { createStitches } from "@stitches/react";

export const { css, getCssText, globalCss, keyframes, styled } = createStitches(
  {
    theme: {
      colors: {
        fg: "hsla(213, 18%, 10%, 1)",
        fg64: "hsla(213, 18%, 10%, 0.64)",
        fg16: "hsla(213, 18%, 10%, 0.16)",
        fg8: "hsla(213, 18%, 10%, 0.08)",
        bg: "hsla(210, 25%, 98%, 1)",
        bg16: "hsla(210, 25%, 98%, .16)",
        primary: "hsla(5, 100%, 64%, 1)",
        primary16: "hsla(5, 100%, 64%, 0.16)"
      },
      space: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "2rem",
        6: "2.5rem",
        7: "3rem",
        8: "3.5rem",
        9: "4rem",
        10: "5rem",
        11: "6rem"
      },
      fonts: {
        sans: "'Satoshi', sans-serif"
      },
      fontSizes: {
        huge: "4rem",
        big: "2.5rem",
        large: "1.75rem",
        medium: "1.5rem",
        normal: "1.25rem",
        small: "1rem",
        tiny: "0.875rem"
      },
      fontWeights: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900"
      },
      letterSpacings: {
        tight: "-0.025em",
        tighter: "-0.05em"
      },
      lineHeights: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5"
      },
      shadows: {
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        large: "0 30px 60px rgba(0, 0, 0, 0.12)",
      }
    },
    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1440px)"
    }
  }
);
