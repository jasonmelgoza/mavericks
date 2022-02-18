import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../stitches.config";

import Icon from "../Icon";
import NavItem from "../NavItem";

const Box = styled("header", {
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

const List = styled("ul", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  height: "100%",
  margin: "0",
  padding: "0",
  listStyle: "none",

  "& li": {
    display: "flex",
    height: "36px",
    width: "40px"
  }
});

const Logo = styled("h1", {
  margin: "0",
  flex: "1",
  color: "$fg"
});

export default function Header() {
  const router = useRouter();
  return (
    <>
      <Box>
        <Content>
          <Logo>
            <Link href="/">
              <a>
                <Icon name="logo" />
              </a>
            </Link>
          </Logo>
          <Nav>
            <List>
              <li>
                <NavItem tooltip="Work">
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      <Icon name="work" />
                    </a>
                  </Link>
                </NavItem>
              </li>
              <li>
                <NavItem tooltip="Blog">
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      <Icon name="blog" />
                    </a>
                  </Link>
                </NavItem>
              </li>
              <li>
                <NavItem tooltip="Current Projects">
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      <Icon name="project" />
                    </a>
                  </Link>
                </NavItem>
              </li>
              <li>
                <NavItem tooltip="About Me">
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      <Icon name="user" />
                    </a>
                  </Link>
                </NavItem>
              </li>
            </List>
          </Nav>
        </Content>
      </Box>
    </>
  );
}
