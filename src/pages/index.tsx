import CardPost from "@components/CardPost";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";
import { formatDatePost } from "@utils/format-date-post";
import LoadingPage from "@components/LoadingPage";
import Pagination from "@components/Pagination";
import { useEffect, useState } from "react";
import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";

export const PAGE_SIZE = 1;
export const LIMIT = 9;

const Home = () => {
  const [posts, setPosts] = useState<IPosts | undefined>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    api
      .get(`/posts`, {
        params: {
          page: page,
          limit: LIMIT,
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  if (!posts) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <div>
        <Thumbnail
          category="Featured"
          title="Por que e pra que usar ReactJs?"
          author="Lucas Lima"
          date="09 de Jul de 2022"
          background="/assets/banner-thumbnail.png"
        />
        <RelevantMatters />
      </div>

      <S.MostViewed>
        <h2>Mais visualizados</h2>
        <S.ContainerCardPost>
          {posts.posts?.map((post) => {
            return (
              <CardPost
                key={post._id}
                id={post._id}
                title={post.title}
                content={post.content}
                author={post.author}
                date={formatDatePost(post.createdAt)}
                image={post.image}
              />
            );
          })}
        </S.ContainerCardPost>
      </S.MostViewed>

      <Pagination
        totalCount={posts.totalPages}
        onPageChange={(page) => setPage(page)}
        currentPage={posts.currentPage}
        pageSize={PAGE_SIZE}
      />
    </S.Container>
  );
};

export default Home;
