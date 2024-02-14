import cx from 'clsx'
import { Box, Icon } from '@/components'
import Link from 'next/link'
import styles from './Pagination.module.scss'

export default function Pagination({
  prevName,
  prevHref,
  nextName,
  nextHref,
  className
}) {
  return (
    <Box className={cx(styles.root, className)}>
      {prevName && (
        <Link href={prevHref} className='pagination-prev'>
          <div className='pagination-lead'>
            <Icon name='arrow-left' />
            <span>Previous</span>
          </div>
          <div className='pagination-description'>{prevName}</div>
        </Link>
      )}
      {nextName && (
        <Link href={nextHref} className='pagination-next'>
          <div className='pagination-lead'>
            <span>Next</span>
            <Icon name='arrow-right' />
          </div>
          <div className='pagination-description'>{nextName}</div>
        </Link>
      )}
    </Box>
  )
}
