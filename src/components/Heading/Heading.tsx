import * as React from "react";
import cx from "clsx";
import styles from "./Heading.module.css";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className,
}) => {
  return React.createElement(
    `h${level}`,
    {
      className: [
        cx(styles.root, styles.newStyle, `heading-${level}`),
        className,
      ]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
};

export default Heading;
