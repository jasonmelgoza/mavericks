/** @type {import('next').NextConfig} */
import withMarkdoc from '@markdoc/next.js'

export default withMarkdoc({ mode: 'static' })({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc']
})
