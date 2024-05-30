import cx from 'clsx'
import Footer from '../Footer'
import Header from '../Header'

import styles from './Layout.module.css'

export default function Layout({ children, className }) {
  return (
    <>
      <Header />
      <main className={cx(styles.root, className)}>{children}</main>
      <Footer />
    </>
  )
}
