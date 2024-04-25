import { Download } from '@/components'

export default {
  render: Download,
  attributes: {
    className: { type: String },
    name: { type: String },
    file: { type: String },
    url: { type: String }
  }
}
