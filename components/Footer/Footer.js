import { styled } from "../../stitches.config";

import Icon from "../Icon";

const Box = styled("footer", {
  maxWidth: "60rem",
  margin: "0 auto",
  paddingBottom: "96px",
  paddingTop: "$9",

  "@bp1": {
    paddingTop: "$6"
  }
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

const List = styled("ul", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  height: "100%",
  margin: "0",
  padding: "0",
  listStyle: "none",

  li: {
    display: "flex",
    height: "36px",
    width: "40px"
  },

  a: {
    transition: "color 0.15s ease",

    "&:hover": {
      color: "$primary"
    }
  }
});

const Copy = styled("div", {
  marginTop: "1rem",
  fontSize: "$small",
  fontWeight: "$medium",
  color: "$fg64"
});

export default function Footer() {
  return (
    <>
      <Box>
        <Content>
          <List>
            <li>
              <a
                href="https://twitter.com/jasonmelgoza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Icon name="twitter" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jmelgoza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Icon name="instagram" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/jasonmelgoza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Icon name="dribbble" />
                </span>
              </a>
            </li>
          </List>
          <Copy>&copy; 2022</Copy>
        </Content>
      </Box>
    </>
  );
}
