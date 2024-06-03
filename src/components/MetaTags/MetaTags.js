import Head from 'next/head'

const MetaTags = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* Add any other meta tags you want */}
  </Head>
)

export default MetaTags
