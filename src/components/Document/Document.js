import * as React from "react";
import { styled } from "../../../stitches.config";

const Box = styled("article", {
  display: "block",
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
  WebkitTapHighlightColor: "transparent",

  p: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",

    "&:not(:last-child)": {
      marginBottom: "1rem"
    }
  },
  a: {
    color: "blue",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline"
    }
  }
});

export default function Document({ children }) {
  return <Box>{children}</Box>;
}
