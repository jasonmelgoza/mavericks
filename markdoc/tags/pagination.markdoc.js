import { Pagination } from '@/components'

export default {
  render: Pagination,
  attributes: {
    className: { type: String },
    prevName: { type: String },
    prevHref: { type: String },
    nextName: { type: String },
    nextHref: { type: String }
  }
}
