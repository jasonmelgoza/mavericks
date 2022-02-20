import { styled } from "../stitches.config.js";

import { Layout } from "../components";

import styles from "../styles/Home.module.css";

const Main = styled("main", {
  padding: "$9 0",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "0 auto"
});

const Content = styled("div", {
  paddingLeft: "calc(env(safe-area-inset-left) + 96px)",
  paddingRight: "calc(env(safe-area-inset-right) + 96px)",
  width: "100%"
});

const Header = styled("h1", {
  textAlign: "left",
  fontFamily: "$sans",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg"
});

const Body = styled("div", {
  padding: "$9 0",
  maxWidth: "40rem",

  p: {
    fontSize: "large",
    fontWeight: "$medium",
    lineHeight: "$normal",

    "&:not(:last-child)": {
      marginBottom: "1rem"
    }
  }
});

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Main>
          <Box>
            <Content>
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
                  I specialize in product design for the web and thrive in 0 <span>&rarr;</span> 1
                  work. My focus is on visual design, user experience, and
                  design systems. I also code for the web with a focus on React,
                  CSS architecture, and component systems.
                </p>
                <p>
                  Currently, I'm working at SecureDocs, Inc. with an incredible
                  cross-functional team, centering on building easy-to-use
                  browser-based software.
                </p>
              </Body>
            </Content>
          </Box>
        </Main>
      </div>
    </Layout>
  );
}
