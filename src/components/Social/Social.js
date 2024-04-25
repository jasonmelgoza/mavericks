import cx from 'clsx'
import { Box, Icon } from '@/components'
import styles from './Social.module.scss'

// Social component definition
// It receives className, icon, name, and url as props
export default function Social({ className, icon, name, url }) {
  return (
    // Box component with combined root and className styles
    <Box className={cx(styles.root, className)}>
      <a className='social-wrapper' href={url} target='_blank'>
        <div className='social-icon'>
          <Icon name={icon} />
        </div>
        <div className='social-name'>
          <span>{name}</span>
        </div>
      </a>
    </Box>
  );
}
