import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled, keyframes } from "../../stitches.config";
import { Icon } from "../";

const scaleOut = keyframes({
  "0%": { opacity: 0, transform: "translateY(-3px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});

const NavButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  width: "36px",
  color: "$fg",
  backgroundColor: "transparent",
  borderRadius: "6px",

  transition: "color 0.15s ease, background-color 0.15s ease",

  "&:hover": {
    color: "$primary",
    backgroundColor: "$primary16"
  },
  "&:focus": { boxShadow: `0 0 0 2px black` }
});

const StyledContent = styled(DropdownMenu.Content, {
  padding: "$1 0 $1 0",
  transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
  animation: `${scaleOut} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  borderRadius: "6px",
  backgroundColor: "$bg",
  border: "1px solid $fg16",
  boxShadow: `$huge`
});

const StyledItem = styled(DropdownMenu.Item, {
  padding: "$1 $3",

  "& a": {
    lineHight: "$tight",
    fontSize: "1.25rem",
    color: "$fg",

    "&:hover": {
      color: "$primary"
    }
  }
});

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <NavButton>
        <Icon name="menu" />
      </NavButton>
    </DropdownMenu.Trigger>

    <StyledContent side="bottom" sideOffset={8}>
      <StyledItem>
        <Link href="/about">
          <a>Work</a>
        </Link>
      </StyledItem>
      <StyledItem>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </StyledItem>
      <StyledItem>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </StyledItem>
      <StyledItem>
        <Link href="/about">
          <a>Current Projects</a>
        </Link>
      </StyledItem>
    </StyledContent>
  </DropdownMenu.Root>
);
