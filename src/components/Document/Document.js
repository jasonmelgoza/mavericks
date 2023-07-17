import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Document.module.scss'

export default function Document({ children }) {
  // Using `useRouter` for rendering depending on the page's route.
  const router = useRouter()
  const path = router?.asPath

  if (path === '/') {
    return (
      <>
        <article className={styles.root}>{children}</article>
        <nav className={styles.nav}>
          <ul className='nav-list' >
            <li>
              <Link href='/work'>Work</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
  return <article className={styles.root}>{children}</article>
}
