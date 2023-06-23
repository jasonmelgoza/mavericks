import Head from "next/head";
import Box from "../Box";

export default function Layout({ children, className }) {
  return (
    <Box
      className={className}
      css={{
        padding: "6rem 0"
      }}
    >
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
      <Box
        as="main"
        css={{
          maxWidth: "656px",
          margin: "0 auto",
          padding: "0 2rem"
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
