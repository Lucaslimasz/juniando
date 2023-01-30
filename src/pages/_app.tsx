import type { AppProps } from "next/app";
import Head from "next/head";
import Global from "@styles/global";
import { PostsProvider } from "hooks/usePosts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Global />
      <Head>
        <title>Juniando</title>
      </Head>
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
