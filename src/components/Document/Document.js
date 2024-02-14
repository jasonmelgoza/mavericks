import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Box, Pagination } from '@/components'
import styles from './Document.module.scss'

export default function Document({ children }) {
  // Using `useRouter` for rendering depending on the page's route.
  const router = useRouter()
  const path = router?.asPath
  const isProject = path.startsWith('/projects/')

  if (path === '/') {
    return (
      <>
        <Box as='article' className={styles.root}>
          {children}
        </Box>
        <Box as='nav' className={styles.nav}>
          <ul className='nav-list'>
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
        </Box>
      </>
    )
  }
  return (
    <>
      <Box as='article' className={styles.root}>
        {isProject ? (
          <Box className='pagination'>
            <Link href='/projects'>
              <ArrowLeftIcon />
              <span>Back</span>
            </Link>
          </Box>
        ) : null}
        {children}
      </Box>
    </>
  )
}
