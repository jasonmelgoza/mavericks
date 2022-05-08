import Image from "next/image";
import { styled } from "../stitches.config.js";

import { Container } from "../components";

import Image1 from "../public/hello-there.webp";

const Header = styled("h1", {
  textAlign: "left",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg",

  "@bp1": {
    fontSize: "2rem"
  }
});

const Body = styled("div", {
  padding: "$9 0",
  maxWidth: "40rem",

  "@bp1": {
    padding: "$6 0"
  },

  p: {
    fontSize: "$medium",
    fontWeight: "$medium",
    lineHeight: "$normal",

    "&:not(:last-child)": {
      marginBottom: "1rem"
    },

    "@bp1": {
      fontSize: "$normal"
    }
  },

  a: {
    position: "relative",
    color: "$primary",
    transition: "color 0.15s ease-in",

    "&:before": {
      content: "",
      position: "absolute",
      bottom: "-4px",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "$primary",
      transformOrigin: "bottom right",
      transform: "scaleX(0)",
      transition: "transform 0.5s ease"
    },

    "&:hover": {
      color: "$primary",

      "&:before": {
        transformOrigin: "bottom left",
        transform: "scaleX(1)"
      }
    }
  }
});

export default function Custom404() {
  return (
    <>
      <Container>
        <Header>
          404
          <br />
          Page Not Found
        </Header>
        <Body>
          <Image alt="Hello There!" src={Image1} />
          <p>The page you are looking for does not exist or has been moved.</p>
        </Body>
      </Container>
    </>
  );
}
