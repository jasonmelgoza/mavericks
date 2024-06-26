import { Item } from 'react-photoswipe-gallery'
import cx from 'clsx'

export const MediaGalleryItem = ({
  alt,
  caption,
  className,
  height,
  original,
  thumbnail,
  width
}) => {
  return (
    <div className={cx('gallery-item-container', className)}>
      <Item
        alt={alt}
        caption={caption}
        height={height}
        original={original}
        thumbnail={thumbnail}
        width={width}
      >
        {({ ref, open }) => (
          <img
            className='gallery-item'
            ref={ref}
            onClick={open}
            src={thumbnail}
            style={{ cursor: 'pointer' }}
          />
        )}
      </Item>
    </div>
  )
}
