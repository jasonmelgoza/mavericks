import * as React from "react";

export default function Heading({ level = 1, children, className }) {
  return React.createElement(
    `h${level}`,
    {
      className: ["heading", className].filter(Boolean).join(" ")
    },
    children
  );
}
