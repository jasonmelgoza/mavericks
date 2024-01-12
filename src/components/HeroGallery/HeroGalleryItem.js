import { Item } from 'react-photoswipe-gallery'

/**
 * Renders a gallery item for the hero section.
 * This component uses react-photoswipe-gallery for image functionality.
 */
export const HeroGalleryItem = ({
  caption,
  height,
  original,
  thumbnail,
  width
}) => {
  return (
    <Item
      original={original}
      thumbnail={thumbnail}
      width={width}
      height={height}
      caption={caption}
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
