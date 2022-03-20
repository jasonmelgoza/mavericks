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

export default function About() {
  return (
    <Layout>
      <Header>A Little About Me</Header>

      <Body>
        <p>
          <strong>Hello There.</strong> I'm Jason Melgoza, a UI designer focused on
          creating simple solutions for complex problems. With over 12 years of
          SaaS and Enterprise product design experience, I understand the
          connections between strategy, development teams, and business goals blah blah.
        </p>
        <p>
          Currently, I am working as a lead product designer on a variety of
          projects with some exciting clients. Until the Spring of 2020, I
          worked for an app design agency where I led product design and
          branding projects across Android, blah blah blah.
        </p>
        <p>
          I'm based in Santa Maria, California with my lovely wife, Alejandra, our kids, Diego and Sofia, and our four dogs. When I'm not working I love spending time with them.
        </p>
        <p>
          <strong>
            In case you would like to know more about me, my work or have any
            questions, feel free to send me an email anytime.
          </strong>
        </p>
      </Body>
    </Layout>
  );
}
