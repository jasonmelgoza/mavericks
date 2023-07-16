import cx from "clsx";
import styles from "./Header.module.scss";

export default function Layout() {
  return (
    <header className={cx(styles.root)}>
      Jason Melgoza
    </header>
  );
}
