import cx from 'clsx'
import { Box } from '@/components'
import styles from './Details.module.scss'

export default function Details({ children, className, heading, subheading, meta, ...props }) {
  return (
    <Box
      className={cx(styles.root, 'details', className)}
      {...props}
    >
      <div className='details-heading'>
        <span>{heading}</span>
      </div>
      <div className='details-subheading'>
        <span>{subheading}</span>
      </div>
      <div className='details-meta'>
        <span>{meta}</span>
      </div>
    </Box>
  );
}
