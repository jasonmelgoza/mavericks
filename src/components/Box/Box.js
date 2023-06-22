import * as React from "react";
import { styled } from "../../../stitches.config";

const StyledBox = styled("div", {
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
  WebkitTapHighlightColor: "transparent"
});

export default function Box({ children, ...props }) {
  return <StyledBox {...props}>{children}</StyledBox>;
}
