import cx from 'clsx'
import { Box } from '@/components'
import styles from './Block.module.scss'

export default function Block({ children, className, ...props }) {
  return (
    <Box
      className={cx(styles.root, 'block', className)}
      {...props}
    >
      {children}
    </Box>
  );
}
