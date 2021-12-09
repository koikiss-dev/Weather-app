import Document, { Html, Head, Main, NextScript } from "next/document";
const MyDocument = () => {
  return (
    <Html>
      <Head>
        <script
          id="my-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBDLK5Z');`,
          }}
        ></script>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="description" content="Weather app" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="bg-purple-1416">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBDLK5Z"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
