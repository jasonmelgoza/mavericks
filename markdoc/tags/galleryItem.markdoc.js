import { MediaGalleryItem as GalleryItem } from '@/components/MediaGallery/MediaGalleryItem'

export default {
  render: GalleryItem,
  attributes: {
    alt: { type: String },
    caption: { type: String },
    className: { type: String },
    height: { type: String },
    original: { type: String },
    thumbnail: { type: String },
    width: { type: String }
  }
}
