import { Tag } from '@markdoc/markdoc'
import { Heading } from '../../src/components'

export default {
  render: Heading,
  children: ['inline'],
  attributes: {
    level: { type: Number, required: true, default: 1 },
    className: { type: String }
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Tag(this.render, { ...attributes }, children)
  }
}
