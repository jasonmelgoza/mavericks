import Footer from '../Footer'
import Header from '../Header'

import styles from './Layout.module.css'

export default function Layout({ children, className }) {
  return (
    <div className={className}>
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer />
    </div>
  )
}
