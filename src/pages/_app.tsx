import type { AppProps } from "next/app";
import Head from "next/head";
import Global from "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Head>
        <title>Juniando</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
