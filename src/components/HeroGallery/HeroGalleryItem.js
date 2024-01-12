import { Item } from 'react-photoswipe-gallery'

/**
 * Renders a gallery item for the hero section.
 * This component uses react-photoswipe-gallery for image functionality.
 */
export const HeroGalleryItem = ({
  alt,
  caption,
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
          ref={ref}
          onClick={open}
          src={original}
          style={{ cursor: 'pointer' }}
        />
      )}
    </Item>
  )
}
