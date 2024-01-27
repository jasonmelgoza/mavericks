import { Item } from 'react-photoswipe-gallery'
import cx from 'clsx'

/**
 * Renders a gallery item for the hero section.
 * This component uses react-photoswipe-gallery for image functionality.
 */
export const HeroGalleryItem = ({
  alt,
  caption,
  className,
  height,
  original,
  thumbnail,
  width
}) => {
  return (
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
          className={cx('gallery-item', className)}
          ref={ref}
          onClick={open}
          src={thumbnail}
          style={{ cursor: 'pointer' }}
        />
      )}
    </Item>
  )
}
