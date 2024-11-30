import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  frontmatter: {
    layout?: string;
    title?: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, frontmatter }) => {
  const isPageLayout = frontmatter.layout === "page";

  return (
    <div className="container">
      {isPageLayout && (
        <header>
          <Link href="/">
            Back
          </Link>
          {frontmatter.title && <h1>{frontmatter.title}</h1>}
        </header>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
