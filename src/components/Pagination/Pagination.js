import cx from 'clsx'
import { Box, Icon } from '@/components'
import Link from 'next/link'
import styles from './Pagination.module.scss'

export default function Pagination({ children, className }) {
  return (
    <Box className={cx(styles.root, className)}>
      <Link href='/projects/basis' className='pagination-prev'>
        <div className='pagination-lead'>
          <Icon name='arrow-left' />
          <span>Previous</span>
        </div>
        <div className='pagination-description'>{children}</div>
      </Link>
      <Link href='/projects/basis' className='pagination-next'>
        <div className='pagination-lead'>
          <span>Next</span>
          <Icon name='arrow-right' />
        </div>
        <div className='pagination-description'>{children}</div>
      </Link>
    </Box>
  )
}
