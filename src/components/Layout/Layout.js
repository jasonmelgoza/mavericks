import cx from 'clsx'
import { Header } from '@/components'
import styles from './Layout.module.scss'

export default function Layout({ children, className }) {
  return (
    <main className={cx(styles.root, className)}>
      <Header />
      {children}
    </main>
  );
}
