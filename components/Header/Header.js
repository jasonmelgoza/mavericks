import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../stitches.config";

import Icon from "../Icon";
import NavItem from "../NavItem";
import Dropdown from "../Dropdown";

const Box = styled("header", {
  display: "flex",
  maxWidth: "50rem",
  margin: "0 auto",
  paddingTop: "$11",

  "@bp1": {
    paddingTop: "$9",
  },
});

const Content = styled("div", {
  display: "flex",
  paddingLeft: "calc(env(safe-area-inset-left) + 64px)",
  paddingRight: "calc(env(safe-area-inset-right) + 64px)",
  alignItems: "center",
  width: "100%",

  "@bp1": {
    paddingLeft: "calc(env(safe-area-inset-left) + 48px)",
    paddingRight: "calc(env(safe-area-inset-right) + 48px)",
  },
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  height: "100%",

  "@bp1": {
    display: "none",
  },
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
    width: "40px",
  },
});

const MobileNav = styled("nav", {
  display: "none",

  "@bp1": {
    display: "block",
  },
});

const Logo = styled("h1", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "0",
  flex: "1",
  color: "$fg",

  a: {
    display: "inline-block",
    transition: "color 0.15s ease",

    "&:hover": {
      color: "$primary",
    },
  },

  svg: {
    transform: "scale(1)",

    "@bp1": {
      transform: "scale(.85)",
    },
  },
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
                  <Link href="/work">
                    <a className={router.pathname == "/work" ? "active" : ""}>
                      <Icon name="work" />
                    </a>
                  </Link>
                </NavItem>
              </li>
              <li>
                <NavItem tooltip="Blog">
                  <Link href="/blog">
                    <a className={router.pathname == "/blog" ? "active" : ""}>
                      <Icon name="blog" />
                    </a>
                  </Link>
                </NavItem>
              </li>
              <li>
                <NavItem tooltip="Current Projects">
                  <Link href="/projects">
                    <a className={router.pathname == "/projects" ? "active" : ""}>
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

          <MobileNav>
            <Dropdown />
          </MobileNav>
        </Content>
      </Box>
    </>
  );
}
