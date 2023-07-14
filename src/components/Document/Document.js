import * as React from "react";
import styles from "./Document.module.css";

export default function Document({ children }) {
  return <article className={styles.root}>{children}</article>;
}
