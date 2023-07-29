import cx from 'clsx'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Box } from '@/components'
import 'photoswipe/dist/photoswipe.css'
import styles from './Media.module.scss'

export default function Media({
  alt,
  caption,
  className,
  height,
  original,
  thumbnail,
  width
}) {
  return (
    <Box className={cx(styles.root, 'media', className)}>
      <Box className='media-container'>
        <Gallery>
          <Item
            alt={alt}
            height={height}
            original={original}
            thumbnail={thumbnail}
            width={width}
          >
            {({ ref, open }) => (
              <img alt={alt} ref={ref} onClick={open} src={thumbnail} />
            )}
          </Item>
        </Gallery>
      </Box>
      {caption ? (
        <Box as='p' className={cx(styles.caption, 'media-caption')}>
          <small>{caption}</small>
        </Box>
      ) : null}
    </Box>
  )
}
