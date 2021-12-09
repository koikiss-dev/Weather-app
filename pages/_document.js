import Document, { Html, Head, Main, NextScript } from "next/document";
const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="description" content="Weather app" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="bg-purple-1416">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
