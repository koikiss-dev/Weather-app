import Head from "next/head";
import Script from "next/script";
import FooterMain from "../components/FooterMain";

const IndexLayout = (props) => {
  return (
    <>
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
        <title>Clima</title>
      </Head>
      <>
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
        <Script src="https://unpkg.com/boxicons@2.1.0/dist/boxicons.js"></Script>
        {props.children}
        <FooterMain />
      </>
    </>
  );
};
export default IndexLayout;
