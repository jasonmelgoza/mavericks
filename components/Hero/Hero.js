import { styled } from "../../stitches.config";

const StyledHero = styled("section", {
  position: "relative",
  overflow: "hidden",
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

const StyledBackground = styled("svg", {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "-1",
  width: "100%",
  height: "calc(100vh + 200px)",
  opacity: "0.25",
  pointerEvents: "none",
  transform: "translateY(0px)",
  filter: "contrast(120%) brightness(120%)"
});

const BgTexture = () => (
  <StyledBackground>
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".8"
        numOctaves="4"
        stitchTiles="stitch"
      ></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"></rect>
  </StyledBackground>
);

export default function Hero({ caption, children, ...props }) {
  return (
    <>
      <StyledHero {...props}>
        <HeroCaption>{caption}</HeroCaption>
        <HeroContainer>{children}</HeroContainer>
        <BgTexture />
      </StyledHero>
    </>
  );
}
