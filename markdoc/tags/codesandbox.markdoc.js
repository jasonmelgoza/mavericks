import { CodeSandbox } from '@/components'

export default {
  render: CodeSandbox,
  attributes: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
