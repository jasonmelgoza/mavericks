import dynamic from 'next/dynamic'

// Removes the useLayoutEffect warning
// https://github.com/dromru/react-photoswipe-gallery/issues/1163
const Media = dynamic(() => import('@/components/Media'), { ssr: false });

export default {
  render: Media,
  attributes: {
    alt: { type: String },
    caption: { type: String },
    className: { type: String },
    height: { type: String },
    original: { type: String },
    thumbnail: { type: String },
    width: { type: String }
  }
}
