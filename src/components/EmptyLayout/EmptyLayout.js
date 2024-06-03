import cx from 'clsx'
import { useGlitch } from 'react-powerglitch'
import Link from 'next/link'

import styles from './EmptyLayout.module.css'

export default function EmptyLayout({ children, className }) {
  const glitch = useGlitch({
    playMode: 'always',
    glitchTimeSpan: {
      start: 0.75,
      end: 0.9,
    },
    shake: {
      velocity: 12,
    },
    slice: {
      count: 10,
    },
  })
  return (
    <>
      <main className={cx(styles.root, className)}>
        <div className='empty-message' ref={glitch.ref}>
          {children}
        </div>
        <Link href="/">Home</Link>
      </main>
    </>
  )
}
