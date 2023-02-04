import type { AppProps } from "next/app";
import Head from "next/head";
import Global from "@styles/global";
import { useRouter } from "next/router";

import { PostsProvider } from "hooks/usePosts";

import * as S from "@styles/Pages/app";
import Header from "@components/Header";
import { AuthProvider } from "hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isOutOfApplication = router.pathname.split("/")[1] !== "auth";

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default MyApp;
