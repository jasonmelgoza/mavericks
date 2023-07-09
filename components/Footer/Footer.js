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
  transform: "translateX(-4px)",

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
  marginTop: "$4",
  fontSize: "$small",
  fontWeight: "$medium",
  color: "$gray6"
});

const NavLink = styled("a", {
  display: "flex",
  height: 32,
  width: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$2",
  transition: "all 0.15s ease",

  "&:hover": {
    backgroundColor: "$primary16",
    color: "$cta"
  }
});

const items = [
  {
    id: 1,
    name: "dribbble",
    link: "https://dribbble.com/jasonmelgoza",
    title: "Jason Melgoza on Dribbble"
  },
  {
    id: 2,
    name: "linkedin",
    link: "https://linkedin.com/in/jasonmelgoza",
    title: "Jason Melgoza on Linkedin"
  },
  {
    id: 3,
    name: "twitter",
    link: "https://twitter.com/jasonmelgoza",
    title: "Jason Melgoza on Twitter"
  },
  {
    id: 4,
    name: "readcv",
    link: "https://read.cv/jasonmelgoza",
    title: "Jason Melgoza on Read.cv"
  },
  {
    id: 5,
    name: "github",
    link: "https://github.com/jasonmelgoza",
    title: "Jason Melgoza on Github"
  }
];

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const listItems = items.map((item) => (
    <li key={item.id}>
      <NavLink
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        title={item.title}
      >
        <Icon name={item.name} />
      </NavLink>
    </li>
  ));

  return (
    <>
      <Box>
        <Content>
          <List>{listItems}</List>
          <Copy>&copy; {getCurrentYear()}</Copy>
        </Content>
      </Box>
    </>
  );
}
