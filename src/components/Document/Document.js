import cx from 'clsx'

import styles from './Document.module.css'

export default function Document({ className, children }) {
  return (
    <>
      <article className={cx(styles.root, className)}>
        {children}
      </article>
    </>
  )
}
