import cx from 'clsx'
import { Gallery } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import styles from './MediaGallery.module.css'

export default function MediaGallery({ caption, className, children }) {
  return (
    <div className={cx(styles.root, className)}>
      <div className='gallery-container'>
        <Gallery withCaption>{children}</Gallery>
      </div>
      {caption && (
        <p className={cx(styles.caption, 'gallery-caption')}>
          <small>{caption}</small>
        </p>
      )}
    </div>
  )
}
