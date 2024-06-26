import { useGlitch } from 'react-powerglitch'
import Link from 'next/link'

import styles from './ArticleHeader.module.css'

const SvgArrow = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.765 4.045a.75.75 0 1 0-1.03-1.09L2.237 7.203a.748.748 0 0 0-.001 1.093l4.499 4.25a.75.75 0 0 0 1.03-1.091L4.636 8.5h8.614a.75.75 0 1 0 0-1.5H4.636l3.129-2.955Z'
    />
  </svg>
)

export default function ArticleHeader({ subheading, title }) {
  const glitch = useGlitch({
    playMode: 'hover'
  })

  return (
    <header className={styles.root}>
      <div className='article-back' ref={glitch.ref}>
        <Link href='/#projects' >
          <SvgArrow />
          <span>Back</span>
        </Link>
      </div>
      {subheading && (
        <p className='article-subheading'>{subheading}</p>
      )}
      <h2 className='article-title'>{title}</h2>
    </header>
  )
}
