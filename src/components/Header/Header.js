import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'clsx'
import styles from './Header.module.scss'

export default function Header() {
  const router = useRouter()
  const path = router?.asPath // URL from router.

  if (path === '/') {
    return (
      <header className={cx(styles.root, 'home')}>
        <Link className='logo' href='/'>JASON MELGOZA</Link>
      </header>
    )
  } else {
    return (
      <header className={cx(styles.root)}>
        <Link className='logo' href='/'>JASON MELGOZA</Link>
        <nav>foo</nav>
      </header>
    )
  }
}
