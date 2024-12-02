import * as React from "react";
import styles from "./Article.module.css";

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <article className={styles.root}>{children}</article>;
};

export default Article;
