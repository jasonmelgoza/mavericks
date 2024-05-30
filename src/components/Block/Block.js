import cx from 'clsx'

import styles from './Block.module.css'

export default function Block({ className, children, id }) {
  return (
    <div id={id} className={cx(styles.root, className)}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
