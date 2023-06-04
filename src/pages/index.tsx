import CardPost from "@components/CardPost";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";
import { formatDatePost } from "@utils/format-date-post";
import LoadingPage from "@components/LoadingPage";
import Pagination from "@components/Pagination";
import { useEffect, useState } from "react";
import { api } from "@config/api";
import { IPost, IPosts } from "@interfaces/posts";
import { usePosts } from "hooks/usePosts";

export const PAGE_SIZE = 1;
export const LIMIT = 9;

interface IHomeProps {
  postMain: IPost;
}

const Home = ({ postMain }: IHomeProps) => {
  const { posts } = usePosts();
  const [postsData, setPostsData] = useState<IPosts | undefined>();
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
        setPostsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  if (!posts || !postMain) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <div>
        <Thumbnail
          title={postMain.title}
          author={postMain.author}
          date={formatDatePost(postMain.createdAt)}
          background={postMain.image}
          id={postMain._id}
        />
        <RelevantMatters />
      </div>

      <S.MostViewed>
        <h2>Mais visualizados</h2>
        <S.ContainerCardPost>
          {postsData?.posts?.map((post) => {
            return (
              <CardPost
                key={post._id}
                id={post._id}
                title={post.title}
                content={post.content}
                author={post.author}
                date={formatDatePost(post.createdAt)}
                image={post.image}
                viewQuantity={post.viewQuantity}
              />
            );
          })}
        </S.ContainerCardPost>
      </S.MostViewed>

      <Pagination
        totalCount={postsData?.totalPages as number}
        onPageChange={(page) => setPage(page)}
        currentPage={postsData?.currentPage as number}
        pageSize={PAGE_SIZE}
      />
    </S.Container>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await api.get("/posts");
  const indexRandomPost = Math.floor(Math.random() * data.posts.length);
  const postMain = data.posts[indexRandomPost];

  return {
    props: {
      postMain,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
