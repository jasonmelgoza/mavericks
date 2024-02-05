import cx from 'clsx'
import { Box, Icon } from '@/components'
import Link from 'next/link'
import styles from './Pagination.module.scss'

export default function Pagination({ children, className }) {
  return (
    <Box className={cx(styles.root, className)}>
      <Link href='/projects/basis'>
        <div className='pagination-lead'>Next <Icon name='arrow-right' /></div>
        <div className='pagination-description'>{children}</div>
      </Link>
    </Box>
  )
}
