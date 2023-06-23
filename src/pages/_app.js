import localFont from "next/font/local";
import { Layout } from "../components";

const satoshiFont = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./Satoshi-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "./Satoshi-Medium.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./Satoshi-MediumItalic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "./Satoshi-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./Satoshi-Black.woff2",
      weight: "900",
      style: "normal"
    }
  ]
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={satoshiFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
