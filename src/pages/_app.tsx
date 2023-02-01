import type { AppProps } from "next/app";
import Head from "next/head";
import Global from "@styles/global";
import { useRouter } from "next/router";

import { PostsProvider } from "hooks/usePosts";

import * as S from "@styles/Pages/app";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isOutOfApplication =
    router.pathname !== "/" && router.pathname !== "/register";

  return (
    <PostsProvider>
      <Global />
      <Head>
        <title>Juniando</title>
        <meta
          name="description"
          content="Oportunidades de trabalho para Júniors e vagas de programação em FrontEnd, BackEnd, Estágio, DevOps, Javascript, Reactjs, Vuejs,... para você Júnior!"
        />
      </Head>
      <S.Wrapper>
        {isOutOfApplication && <Header />}
        <Component {...pageProps} />
      </S.Wrapper>
    </PostsProvider>
  );
}

export default MyApp;
