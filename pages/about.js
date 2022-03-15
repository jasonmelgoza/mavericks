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
      <SubHeader>Origin Story</SubHeader>

      <Header>A Little About Me</Header>

      <Body>
        <p>
          Hi. I'm Jason Melgoza, an outcome-driven designer focused on creating
          simple solutions for complex problems. I enjoy collaborating with
          teams and embracing the intricacies that make your business
          successful. With over 12 years of SaaS and Enterprise product design
          experience, I understand the connections between strategy, development
          teams, and business goals.
        </p>
        <p>
          Currently, I am working as a freelance designer on a variety of
          projects with some exciting clients. Until the Spring of 2020, I
          worked for an app design agency where I led product design and
          branding projects across Android, iOS, and desktop. Before agency
          work, I served as Creative Director at Creative Market, where I helped
          launch their core product. My primary responsibility was to oversee
          product design and brand development. During my time there, I had the
          opportunity to lead the pre-launch effort along with the development
          team. This resulted in nearly 70,000 new user sign-ups in just under
          nine months. Creative Market went on to be acquired by Autodesk.
        </p>
        <p>
          Additionally, I have helped design for companies like OpenTable,
          Expedia, Microsoft, ESPN, Fidelity Investments, AT&T, and Blue Cross
          Blue Shield.
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
