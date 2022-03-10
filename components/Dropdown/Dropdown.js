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
  background: "red",
});

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <NavButton>
        <Icon name="menu" />
      </NavButton>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content>
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
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
