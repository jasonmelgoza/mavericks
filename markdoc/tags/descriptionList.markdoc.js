import { DescriptionList } from '@/components'

export default {
  render: DescriptionList,
  attributes: {
    className: { type: String },
    detail: { type: Object },
    term: { type: Object }
  }
}
