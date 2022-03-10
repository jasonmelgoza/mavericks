import { styled, keyframes } from "../../stitches.config";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Icon } from "../";

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
    backgroundColor: "$primary16",
  },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const scaleIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const StyledContent = styled(DropdownMenu.Content, {
  transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
  animation: `${scaleIn} 0.5s ease-out forwards`,
  borderRadius: "6px",
  boxShadow: `0 0 0 2px black`,
  padding: "12px",
});

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <NavButton>
        <Icon name="menu" />
      </NavButton>
    </DropdownMenu.Trigger>

    <StyledContent>
      <DropdownMenu.Item>
        <Link href="/about">
          <a>Work</a>
        </Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link href="/about">
          <a>Projects</a>
        </Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </DropdownMenu.Item>
    </StyledContent>
  </DropdownMenu.Root>
);
