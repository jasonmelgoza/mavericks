import { styled } from "../../stitches.config";

const StyledBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "60rem",
  margin: "0 auto",
  paddingLeft: "calc(env(safe-area-inset-left) + 64px)",
  paddingRight: "calc(env(safe-area-inset-right) + 64px)",
  width: "100%",

  "@bp1": {
    paddingLeft: "calc(env(safe-area-inset-left) + 48px)",
    paddingRight: "calc(env(safe-area-inset-right) + 48px)"
  }
});

const StyledInnerBox = styled("div", {
  maxWidth: "100%"
});

export default function Box({ children, ...props }) {
  return (
    <StyledBox {...props}>
      <StyledInnerBox>{children}</StyledInnerBox>
    </StyledBox>
  );
}
