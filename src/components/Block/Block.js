import cx from 'clsx'
import styles from './Block.module.scss'

export default function Block({ children, className }) {
  return (
    <div
      className={cx(styles.root, 'block', className)}
    >
      {children}
    </div>
  );
}
