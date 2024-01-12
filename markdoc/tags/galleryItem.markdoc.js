import { HeroGalleryItem as GalleryItem } from '@/components/HeroGallery/HeroGalleryItem'

export default {
  render: GalleryItem,
  attributes: {
    alt: { type: String },
    caption: { type: String },
    height: { type: String },
    original: { type: String },
    thumbnail: { type: String },
    width: { type: String }
  }
}
