import cx from 'clsx'
import styles from './Callout.module.css'

export default function App({ className, children, ...props }) {
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}
    </div>
  )
}
