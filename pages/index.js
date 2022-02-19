import { styled } from "../stitches.config.js";

import { Layout } from "../components";

import styles from "../styles/Home.module.css";

const Main = styled("main", {
  minHeight: "100vh",
  padding: "$9 0",
  flex: "1 1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
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

              <p className={styles.description}>
                Get started by editing{" "}
                <code className={styles.code}>pages/index.js</code>
              </p>

              <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>Documentation &rarr;</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                  <h2>Learn &rarr;</h2>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className={styles.card}
                >
                  <h2>Examples &rarr;</h2>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </a>
              </div>
            </Content>
          </Box>
        </Main>
      </div>
    </Layout>
  );
}
