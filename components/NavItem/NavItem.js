import React from "react";
import { styled, keyframes } from "../../stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-6px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});

const StyledContent = styled(TooltipPrimitive.Content, {
  padding: "10px 16px",
  fontSize: "14px",
  lineHeight: 1,
  color: "black",
  backgroundColor: "$primary",
  borderRadius: "6px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      animationName: slideDownAndFade
    }
  }
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$primary"
});

export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;

const NavIcon = styled("div", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  width: "36px",

  a: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: "$primary",
    backgroundColor: "transparent",
    borderRadius: "6px",

    "&:hover": { backgroundColor: "$primary16" }
  }
});

const NavItem = ({ children, tooltip }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavIcon>{children}</NavIcon>
      </TooltipTrigger>
      <StyledContent sideOffset={12}>
        {tooltip}
        <StyledArrow />
      </StyledContent>
    </Tooltip>
  );
};

export default NavItem;
