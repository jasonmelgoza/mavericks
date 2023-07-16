import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'clsx'
import styles from './Header.module.scss'

export default function Header() {

  // Using `useRouter` for rendering depending on the page's route.
  const router = useRouter()
  const path = router?.asPath

  if (path === '/') {
    return (
      <header className={cx(styles.root, styles.home)}>
        <Link className='logo' href='/'>JASON MELGOZA</Link>
      </header>
    )
  }
  return (
    <header className={cx(styles.root, styles.page)}>
      <Link className='logo' href='/'>JASON MELGOZA</Link>
      <nav>foo</nav>
    </header>
  )
}
