import cx from 'clsx'

import styles from './Box.module.css'

export default function Box({ className, children }) {
  return (
    <div className={cx(styles.root, className)}>
      {children}
    </div>
  )
}
