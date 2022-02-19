import { createStitches } from "@stitches/react";

export const { css, globalCss, styled, keyframes } = createStitches({
  theme: {
    colors: {
      fg: "hsla(213, 18%, 10%, 1)",
      bg: "hsla(210, 25%, 98%, 1)",
      bg16: "hsla(210, 25%, 98%, .16)",
      primary: "hsla(359, 86%, 67%, 1)",
      primary16: "hsla(359, 86%, 67%, 0.16)"
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "2.5",
      7: "3rem",
      8: "3.5rem",
      9: "4rem",
      10: "5rem"
    },
    fonts: {
      sans: "'Satoshi', sans-serif"
    }
  }
});
