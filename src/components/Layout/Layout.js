import cx from 'clsx'
import { Box } from '@/components'
import { Header } from '@/components'
import styles from './Layout.module.scss'

export default function Layout({ children, className }) {
  return (
    <Box as='main' className={cx(styles.root, className)}>
      <Header />
      {children}
    </Box>
  );
}
