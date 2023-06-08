import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import * as S from "@styles/Pages/details";

import { api } from "@config/api";
import { IPost } from "@interfaces/posts";

import { formatDatePost } from "@utils/format-date-post";
import { usePosts } from "hooks/usePosts";

import LoadingPage from "@components/LoadingPage";
import RelevantMatters from "@components/RelevantMatters";
import { shareLinkPost } from "@utils/copy-url";
import Head from "next/head";

let image = "";

const Details = ({ post }: { post: IPost }) => {
  const { updatedViewsCount } = usePosts();
  image = post.image;

  if (!post) {
    return <LoadingPage />;
  }

  useEffect(() => {
    setTimeout(() => {
      updatedViewsCount(post.slug);
    }, 1000 * 10); // 10 seconds
  }, []);

  return (
    <>
      <Head>
        <title>{post.title} | Juniando</title>
        <meta
          name="description"
          content={post.content.replace(/<[^>]*>/g, "").substring(0, 300)}
        />
        <meta property="og:image" content={post.image} />
      </Head>
      <S.Container>
        <h1>{post.title}</h1>
        <S.DivInfo>
          <S.Text>{post.author}</S.Text>
          <S.DotDetail></S.DotDetail>
          <S.Text>{formatDatePost(post.createdAt)}</S.Text>
          <S.DotDetail></S.DotDetail>
          <S.Text>{post.viewQuantity} View</S.Text>
          <button onClick={shareLinkPost}>
            <Image src="/assets/icons/share.svg" width={20} height={20} />
            <p>Compartilhe</p>
          </button>
        </S.DivInfo>
        <S.Top>
          <Image src={post.image} objectFit="none" width={700} height={400} />
          <RelevantMatters />
        </S.Top>
        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.Body>
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  const { data } = await api.get(`/posts/content/${slug}`);

  return {
    props: {
      post: data,
    },
  };
};

export default Details;
