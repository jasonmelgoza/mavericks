import cx from 'clsx';
import styles from './Box.module.scss'

export default function Box({ as: Component = 'div', children, className, ...rest }) {
  return (
    <Component className={cx(styles.root, className)} {...rest}>
      {children}
    </Component>
  );
}
