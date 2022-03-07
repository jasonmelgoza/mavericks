import { styled } from "../stitches.config.js";

import { Layout, Icon } from "../components";

const Main = styled("main", {
  padding: "$9 0",

  "@bp1": {
    padding: "$6 0"
  }
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "54rem",
  margin: "0 auto"
});

const Content = styled("div", {
  paddingLeft: "calc(env(safe-area-inset-left) + 64px)",
  paddingRight: "calc(env(safe-area-inset-right) + 64px)",
  width: "100%",

  "@bp1": {
    paddingLeft: "calc(env(safe-area-inset-left) + 48px)",
    paddingRight: "calc(env(safe-area-inset-right) + 48px)"
  }
});

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
  }
});

export default function Home() {
  return (
    <Layout>
      <Main>
        <Box>
          <Content>
            <SubHeader>
              <Icon name="pin" />
              Santa Maria, California
            </SubHeader>

            <Header>
              Hi there,
              <br />
              I'm Jason Melgoza
            </Header>

            <Body>
              <p>
                I'm an interface designer who is passionate about turning
                complex problems into simple and elegant solutions.
              </p>
              <p>
                I specialize in product design for the web and thrive in 0{" "}
                <span>&rarr;</span> 1 work. My focus is on visual design, user
                experience, and design systems. I also code for the web with a
                focus on React, CSS architecture, and component systems.
              </p>
              <p>
                Currently, I'm working at{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  SecureDocs, Inc
                </a>{" "}
                with an incredible cross-functional team, centering on building
                easy-to-use browser-based software.
              </p>
            </Body>
          </Content>
        </Box>
      </Main>
    </Layout>
  );
}
