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

export default function Projects() {
  return (
    <Layout>
      <Header>Projects</Header>

      <Body>
        <p>
          I'm an interface designer who is passionate about turning complex
          problems into simple and elegant solutions.
        </p>
        <p>
          I specialize in product design for the web and thrive in 0{" "}
          <span>&rarr;</span> 1 work. My focus is on visual design, user
          experience, and design systems. I also code for the web with a focus
          on React, CSS architecture, and component systems.
        </p>
        <p>
          Currently, I'm working at{" "}
          <a
            href="https://www.securedocs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SecureDocs, Inc
          </a>{" "}
          with an incredible cross-functional team, centering on building
          easy-to-use browser-based software.
        </p>
      </Body>
    </Layout>
  );
}
