import { HeroGallery as Gallery } from '@/components/HeroGallery'

export default {
  render: Gallery,
  attributes: {
    caption: { type: String },
    className: { type: String }
  }
}
