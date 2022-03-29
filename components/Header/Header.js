import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../stitches.config";

import Icon from "../Icon";

const Box = styled("header", {
  display: "flex",
  maxWidth: "50rem",
  margin: "0 auto",
  paddingTop: "$11",

  "@bp1": {
    paddingTop: "$9"
  }
});

const Content = styled("div", {
  display: "flex",
  paddingLeft: "calc(env(safe-area-inset-left) + 64px)",
  paddingRight: "calc(env(safe-area-inset-right) + 64px)",
  alignItems: "center",
  width: "100%",

  "@bp1": {
    paddingLeft: "calc(env(safe-area-inset-left) + 48px)",
    paddingRight: "calc(env(safe-area-inset-right) + 48px)"
  }
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
      color: "$primary"
    }
  },

  svg: {
    transform: "scale(1)",

    "@bp1": {
      transform: "scale(.85)"
    }
  }
});

export default function Header() {
  const router = useRouter();
  return (
    <>
      <Box>
        <Content>
          <Logo>
            <Link href="/">
              <a title="jmelgoza.com">
                <Icon name="logo" />
              </a>
            </Link>
          </Logo>
        </Content>
      </Box>
    </>
  );
}
