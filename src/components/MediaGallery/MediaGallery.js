import cx from 'clsx'
import { Box } from '@/components'
import { Gallery } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import styles from './MediaGallery.module.scss'

export default function MediaGallery({ caption, className, children }) {
  return (
    <Box className={cx(styles.root, className)}>
      <Box className='gallery-container'>
        <Gallery withCaption>{children}</Gallery>
      </Box>
      {caption && (
        <Box as='p' className={cx(styles.caption, 'gallery-caption')}>
          <small>{caption}</small>
        </Box>
      )}
    </Box>
  )
}
