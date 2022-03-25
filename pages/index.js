import { styled } from "../stitches.config.js";
import { Icon } from "../components";

const Header = styled("h1", {
  marginBottom: "$9",
  textAlign: "left",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg",

  "@bp1": {
    marginBottom: "$6",
    fontSize: "2rem"
  }
});

const SubHeader = styled("div", {
  display: "flex",
  marginBottom: "$4",
  flexDirection: "row",
  alignItems: "center",
  gap: "$1",
  justifyContent: "flex-start",
  fontSize: "20px",
  fontWeight: "$medium",
  lineHeight: "$normal",

  "@bp1": {
    fontSize: "$normal"
  }
});

const Body = styled("div", {
  maxWidth: "40rem",

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

export default function Home() {
  return (
    <>
      <SubHeader>
        <Icon name="pin" />
        <span>
          Santa Maria<span>&#44;</span> California
        </span>
      </SubHeader>

      <Header>
        Hi there<span>&#44;</span>
        <br />I<span>&#39;</span>m Jason Melgoza
      </Header>

      <Body>
        <p>
          I<span>&#39;</span>m an interface designer who is passionate about
          turning complex problems into simple and elegant solutions.
        </p>
        <p>
          I specialize in product design for the web and thrive in 0{" "}
          <span>&rarr;</span> 1 work. My focus is on visual design, user
          experience, and design systems. I also code for the web with a focus
          on React, CSS architecture, and component systems.
        </p>
        <p>
          Currently, I<span>&#39;</span>m working at{" "}
          <a
            href="https://www.securedocs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SecureDocs<span>&#44;</span> Inc
          </a>{" "}
          with an incredible cross-functional team, centering on building
          easy-to-use browser-based software.
        </p>
      </Body>
    </>
  );
}
