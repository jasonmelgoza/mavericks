import { styled } from "../stitches.config.js";

import { Layout } from "../components";

const Header = styled("h1", {
  textAlign: "left",
  fontFamily: "$sans",
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

const Image = styled("img", {
  width: "100%",
  marginBottom: "$4"
});

export default function Custom404() {
  return (
    <Layout>
      <Header>
        404
        <br />
        Page Not Found
      </Header>
      <Body>
        <Image src="hello-there.webp" />
        <p>The page you are looking for does not exist or has been moved.</p>
      </Body>
    </Layout>
  );
}
