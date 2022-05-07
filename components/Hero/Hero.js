import { styled } from "../../stitches.config";

const StyledHero = styled("section", {
  backgroundColor: "$fg8",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingTop: "64px",
  paddingBottom: "64px",
  marginTop: "64px",
  marginBottom: "64px",

  "@bp1": {
    paddingTop: "48px",
    paddingBottom: "48px",
    margintop: "48px",
    marginBottom: "48px"
  }
});

const HeroContainer = styled("div", {
  display: "flex",
  width: "64rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "calc(env(safe-area-inset-left) + 64px)",
  paddingRight: "calc(env(safe-area-inset-right) + 64px)",

  "@bp1": {
    paddingLeft: "calc(env(safe-area-inset-left) + 48px)",
    paddingRight: "calc(env(safe-area-inset-right) + 48px)"
  }
});

const HeroCaption = styled("div", {
  border: "0",
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(100%)",
  height: "1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
});

export default function Hero({ caption, children, ...props }) {
  return (
    <>
      <StyledHero {...props}>
        <HeroCaption>{caption}</HeroCaption>
        <HeroContainer children={children} />
      </StyledHero>
    </>
  );
}
