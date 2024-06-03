import { Item } from '@/components'

export default {
  render: Item,
  attributes: {
    className: { type: String },
    description: { type: String },
    heading: { type: String },
    href: { type: String },
    number: { type: Number },
    subHeading: { type: String },
  }
}
