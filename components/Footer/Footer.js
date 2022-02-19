import { styled } from "../../stitches.config";

import Icon from "../Icon";

const Box = styled("footer", {
  maxWidth: "900px",
  margin: "0 auto",
  paddingBottom: "96px"
});

const Content = styled("div", {
  paddingLeft: "calc(env(safe-area-inset-left) + 96px)",
  paddingRight: "calc(env(safe-area-inset-right) + 96px)",
  width: "100%"
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

const Year = styled("div", {
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Icon name="dribbble" />
                </span>
              </a>
            </li>
          </List>
          <Year>&copy; 2022</Year>
        </Content>
      </Box>
    </>
  );
}
