import * as React from "react";
import styles from "./Document.module.scss";

export default function Document({ children }) {
  return <article className={styles.root}>{children}</article>;
}
