import Box from "../Box";
import Link from "next/link";

export default function Header({ className, ...props }) {
  return (
    <Box
      as="nav"
      className={className}
      css={{
        marginBottom: "3rem",

        "& ul": {
          margin: "0px",
          padding: "0",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        },

        "& a": {
          fontSize: "1.125rem",
          lineHeight: "1.5",
          color: "$hiContrast",
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",

          "&:hover": {
            opacity: "50%",
            textDecoration: "none"
          }
        }
      }}
      {...props}
    >
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </Box>
  );
}
