import Box from "../Box";
import Link from "next/link";
import cx from "clsx";

export default function Header({ className, ...props }) {
  return (
    <Box
      as="nav"
      className={cx("nav-block", className)}
      css={{
        marginBottom: "1rem",

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
          
          "& span": {
            display: "none",
          },

          "&:hover": {
            opacity: "50%",
            textDecoration: "none",
          
            "& span": {
              display: "inline-block",
            }  
          },
        }
      }}
      {...props}
    >
      <ul>
        <li>
          <Link href="/">Home<span >foo</span></Link>
        </li>
        <li>
          <Link href="/projects">Projects<span>foo</span></Link>
        </li>
        <li>
          <Link href="/work">Work<span>foo</span></Link>
        </li>
        <li>
          <Link href="/about">About<span>foo</span></Link>
        </li>
        <li>
          <Link href="/style-guide">Style<span>foo</span></Link>
        </li>
      </ul>
    </Box>
  );
}
