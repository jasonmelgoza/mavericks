import Head from "next/head";
import Link from "next/link";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import styles from "@/styles/App.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const TITLE = "Jason Melgoza";
const DESCRIPTION =
  "I'm a product designer focusing on visual design, design systems, and front-end development.";

export default function App({ Component, pageProps }: AppProps) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;

  if (markdoc?.frontmatter) {
    if (markdoc.frontmatter.title) {
      title = `Jason Melgoza - ${markdoc.frontmatter.title}`;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}
      >
        <header>
          <Link href="/">
            <h1>Jason Melgoza</h1>
          </Link>
        </header>
        <Component {...pageProps} />
        <footer>
          <p>&copy; Jason Melgoza</p>
        </footer>
      </main>
    </>
  );
}
