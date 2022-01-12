import { createStitches } from "@stitches/react";

export const { css, globalCss, styled, keyframes } = createStitches({
  theme: {
    colors: {
      bg: "hsla(213, 18%, 10%, 1)",
      fg: "hsla(210, 25%, 98%, 1)",
      fg16: "hsla(210, 25%, 98%, 0.16)",
      primary: "hsla(44, 87%, 68%, 1)",
      primary16: "hsla(44, 87%, 68%, 0.16)"
    },
    fonts: {
      sans: "'Satoshi', sans-serif",
    },
  }
});
