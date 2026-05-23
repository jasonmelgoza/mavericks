import { Item } from '@/components'

export default {
  render: Item,
  attributes: {
    className: { type: String },
    description: { type: String },
    external: { type: Boolean },
    heading: { type: String },
    href: { type: String },
    number: { type: Number },
    startDate: { type: String },
    subHeading: { type: String },
  }
}
