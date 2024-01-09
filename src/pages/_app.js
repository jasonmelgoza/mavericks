import Head from 'next/head'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Layout } from '@/components'
import '@/styles/globals.css'

const TITLE = 'Jason Melgoza'
const DESCRIPTION =
  "I'm product designer focusing on visual design, design systems, and iconography"
const KEYWORDS =
  'product designer, designer, interface, ui design, ux design, design systems, minimal, jasonmelgoza, jason melgoza'

const satoshiFont = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})

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
    return <Component {...pageProps} />
  }
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Jason Melgoza' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        {isLanding ? (
          <title>{TITLE}</title>
        ) : (
          <title>{`${TITLE} | ${title}`}</title>
        )}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout className={satoshiFont.className}>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}
