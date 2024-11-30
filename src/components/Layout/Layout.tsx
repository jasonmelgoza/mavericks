import React from "react";
import Link from "next/link";
import SvgLogo from "@/components/Symbol";
import Styles from "@/styles/App.module.css";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  frontmatter: {
    layout?: "page" | "default"; // Add explicit type for layout
    title?: string;
  };
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = "", // Add default value
  frontmatter,
}) => {
  const isPageLayout = frontmatter.layout === "page";

  return (
    <main className={`${Styles.main} ${className}`.trim()} role="main">
      <header role="banner">
        <Link href="/" aria-label="Home">
          <SvgLogo />
        </Link>
      </header>
      {isPageLayout && (
        <div className={Styles.pageHeader}>
          {frontmatter.title && (
            <h1 className={Styles.pageTitle}>{frontmatter.title}</h1>
          )}
          <Link href="/" className={Styles.backLink} aria-label="Back to home">
            Back
          </Link>
        </div>
      )}
      {children}
      <footer>
        <p>&copy; Jason Melgoza</p>
      </footer>
    </main>
  );
};

export default Layout;
