import cx from 'clsx'

import styles from './EmptyLayout.module.css'

export default function EmptyLayout({ children }) {
  return <main className={cx(styles.root)}>{children}</main>
}
