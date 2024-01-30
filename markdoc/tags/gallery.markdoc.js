import { MediaGallery as Gallery } from '@/components/MediaGallery'

export default {
  render: Gallery,
  attributes: {
    caption: { type: String },
    className: { type: String }
  }
}
