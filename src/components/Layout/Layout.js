import Head from 'next/head'
import cx from 'clsx'
import { Header } from '@/components'
import styles from './Layout.module.scss'

export default function Layout({ children, className }) {
  return (
    <main className={cx(styles.root, { className })}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jason Melgoza" />
        <meta
          name="description"
          content="I'm product designer focusing on visual design, design systems, and iconography"
        />
        <meta
          name="keywords"
          content="product designer, designer, interface, ui design, ux design, design systems, minimal, jasonmelgoza, jason melgoza"
        />
        <title>Jason Melgoza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </main>
  );
}
