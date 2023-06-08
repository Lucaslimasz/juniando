import type { AppProps } from "next/app";
import Global from "@styles/global";
import { useRouter } from "next/router";

import { PostsProvider } from "hooks/usePosts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <S.Wrapper>
          {isOutOfApplication && <Header />}
          <Component {...pageProps} />
          <ToastContainer autoClose={8000} />
        </S.Wrapper>
      </PostsProvider>
    </AuthProvider>
  );
}

export default MyApp;
