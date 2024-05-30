import Head from 'next/head'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { Layout, EmptyLayout } from '@/components'

import '@/styles/reset.css'
import '@/styles/globals.css'

const mona = localFont({ src: './fonts/Mona-Sans.woff2', weight: 'variable' })

const TITLE = 'Jason Melgoza'
const DESCRIPTION =
  "I'm product designer focusing on visual design, design systems, and iconography"
const KEYWORDS =
  'product designer, designer, interface, ui design, ux design, design systems, minimal, jasonmelgoza, jason melgoza'

export default function App({ Component, pageProps, ...props }) {
  const router = useRouter()

  const { markdoc } = pageProps

  let title = TITLE
  let description = DESCRIPTION
  let keywords = KEYWORDS

  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description
    }
  }

  const isLanding = props.router.pathname === '/'

  if (router.pathname == '/404') {
    return (
      <EmptyLayout>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='author' content='Jason Melgoza' />
          <meta name='title' content={title} />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          <meta property='og:url' content='https://jasonmelgoza.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content='/og-image.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='400' />
          <meta property='og:image:height' content='200' />
          <title>{title}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </EmptyLayout>
    )
  }
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Jason Melgoza' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:url' content='https://jasonmelgoza.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/og-image.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='200' />
        {isLanding ? (
          <title>{TITLE}</title>
        ) : (
          <title>{`${TITLE} | ${title}`}</title>
        )}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout
        className={mona.className}
        frontmatter={pageProps.markdoc.frontmatter}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
