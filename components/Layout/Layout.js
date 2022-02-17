import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { globalCss, styled } from "../../stitches.config";

import Icon from "../Icon";

const globalStyles = globalCss({
  fontFamily: "$sans"
});

const Header = styled("header", {
  display: "flex",
  maxWidth: "900px",
  margin: "0 auto",
  paddingTop: "96px"
});

const Content = styled("div", {
  display: "flex",
  paddingLeft: "calc(env(safe-area-inset-left) + 96px)",
  paddingRight: "calc(env(safe-area-inset-right) + 96px)",
  alignItems: "center",
  width: "100%"
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  height: "100%"
});

const Logo = styled("h1", {
  margin: "0",
  flex: "1",
  color: "$primary"
});

export default function Layout({ children }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Jason Melgoza</title>
        <meta name="description" content="Jason Melgoza" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Content>
          <Logo>
            <Link href="/">
              <a>
                <Icon name="logo" />
              </a>
            </Link>
          </Logo>
          Header
        </Content>
      </Header>
      <main>{children}</main>
      footer
    </>
  );
}
