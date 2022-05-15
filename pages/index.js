import Link from "next/link";
import { styled } from "../stitches.config.js";
import { Container, Divider, Icon } from "../components";

const Header = styled("h1", {
  marginBottom: "$9",
  textAlign: "left",
  fontSize: "$huge",
  fontWeight: "$black",
  lineHeight: "$none",
  letterSpacing: "$tighter",
  color: "$fg",

  "@bp1": {
    marginBottom: "$6",
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
  maxWidth: "40rem",

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
  },

  a: {
    position: "relative",
    color: "$primary",
    transition: "color 0.15s ease-in",

    "&:before": {
      content: "",
      position: "absolute",
      bottom: "-4px",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "$primary",
      transformOrigin: "bottom right",
      transform: "scaleX(0)",
      transition: "transform 0.5s ease"
    },

    "&:hover": {
      color: "$primary",

      "&:before": {
        transformOrigin: "bottom left",
        transform: "scaleX(1)"
      }
    }
  }
});

const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});

const ListItem = styled("div", {
  display: "block",

  a: {
    display: "inline-flex",
    flexDirection: "column",

    "&:hover": {
      color: "$primary"
    }
  }
});

const ListItemHeading = styled("div", {
  display: "block",
  fontSize: "$medium",
  fontWeight: "$bold",
  lineHeight: "$snug",
  textDecoration: "underline",

  "@bp1": {
    fontSize: "$normal"
  }
});

const ListItemContent = styled("div", {
  display: "block",
  fontSize: "$medium",
  lineHeight: "$snug",

  "@bp1": {
    fontSize: "$normal"
  }
});

const ListFooter = styled("div", {
  display: "block",
  fontSize: "$normal",
  fontWeight: "$medium",

  a: {
    position: "relative",
    color: "$primary",
    transition: "color 0.15s ease-in",

    "&:before": {
      content: "",
      position: "absolute",
      bottom: "-4px",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "$primary",
      transformOrigin: "bottom right",
      transform: "scaleX(0)",
      transition: "transform 0.5s ease"
    },

    "&:hover": {
      color: "$primary",

      "&:before": {
        transformOrigin: "bottom left",
        transform: "scaleX(1)"
      }
    }
  }
});

export default function Home() {
  return (
    <>
      <Container>
        <SubHeader>
          <Icon name="pin" />
          <span>
            Santa Maria<span>&#44;</span> California
          </span>
        </SubHeader>

        <Header>
          Hi there<span>&#44;</span>
          <br />I<span>&#39;</span>m Jason Melgoza
        </Header>

        <Body>
          <p>
            I<span>&#39;</span>m an interface designer who is passionate about
            turning complex problems into simple and elegant solutions.
          </p>
          <p>
            I specialize in product design for the web and thrive in 0{" "}
            <span>&rarr;</span> 1 work. My focus is on visual design, user
            experience, and design systems. I also code for the web with a focus
            on React, CSS architecture, and component systems.
          </p>
          <p>
            Currently, I<span>&#39;</span>m working at{" "}
            <a
              href="https://www.securedocs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SecureDocs<span>&#44;</span> Inc
            </a>{" "}
            with an incredible cross-functional team, centering on building
            easy-to-use browser-based software.
          </p>
        </Body>

        <Divider />

        <SubHeader>
          <Icon name="work" />
          <span>Recent Experience</span>
        </SubHeader>

        <List>
          <ListItem>
            <Link href="/work/securedocs">
              <a>
                <ListItemHeading>SecureDocs, Inc.</ListItemHeading>
                <ListItemContent>
                  Senior UI/UX Designer (2018 - Present)
                </ListItemContent>
              </a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/work/rightscale">
              <a>
                <ListItemHeading>RightScale</ListItemHeading>
                <ListItemContent>
                  Senior UI Designer (2012 - 2018)
                </ListItemContent>
              </a>
            </Link>
          </ListItem>
          <ListFooter>
            <a
              href="/resume-jasonmelgoza.pdf"
              target="_blank"
            >
              View Resume <span>&rarr;</span>
            </a>
          </ListFooter>
        </List>
      </Container>
    </>
  );
}
