import { Details } from '@/components'

export default {
  render: Details,
  attributes: {
    className: { type: String },
    heading: { type: String },
    link: { type: String },
    meta: { type: String },
    subheading: { type: String }
  }
}
