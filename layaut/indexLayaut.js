import Head from "next/head";
import Script from "next/script";
import FooterMain from "../components/FooterMain";

const IndexLayout = (props) => {
  return (
    <>
      <Head>
        <title>Clima</title>
      </Head>
      <>
        <Script src="https://unpkg.com/boxicons@2.1.0/dist/boxicons.js"></Script>
        {props.children}
        <FooterMain />
      </>
    </>
  );
};
export default IndexLayout;
