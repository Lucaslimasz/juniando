import LoadingPage from "@components/LoadingPage";
import RelevantMatters from "@components/RelevantMatters";
import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";

import * as S from "@styles/Pages/details";
import { formatDatePost } from "@utils/format-date-post";
import { usePosts } from "hooks/usePosts";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect } from "react";

const Details = ({ post }: { post: IPosts }) => {
  const { updatedViewsCount } = usePosts();

  if (!post) {
    return <LoadingPage />;
  }

  useEffect(() => {
    setTimeout(() => {
      updatedViewsCount(post._id);
    }, 1000 * 10); // 10 seconds
  }, []);

  return (
    <S.Container>
      <h1>{post.title}</h1>
      <S.DivInfo>
        <S.Text>{post.author}</S.Text>
        <S.DotDetail></S.DotDetail>
        <S.Text>{formatDatePost(post.createdAt)}</S.Text>
        <S.DotDetail></S.DotDetail>
        <S.Text>{post.viewQuantity} Viewsah</S.Text>
      </S.DivInfo>
      <S.Top>
        <Image src={post.image} width={700} height={400} />
        <RelevantMatters />
      </S.Top>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.Body>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.idPost;

  const { data } = await api.get(`/posts/content/${id}`);

  return {
    props: {
      post: data,
    },
  };
};

export default Details;
