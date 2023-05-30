import CardPost from "@components/CardPost";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";
import { formatDatePost } from "@utils/format-date-post";
import { usePosts } from "hooks/usePosts";
import LoadingPage from "@components/LoadingPage";
import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";

interface IHomeProps {
  postMain: IPosts;
}

const Home = ({ postMain }: IHomeProps) => {
  const { posts } = usePosts();

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
        />
        <RelevantMatters />
      </div>

      <S.MostViewed>
        <h2>Mais visualizados</h2>
        <S.ContainerCardPost>
          {posts?.map((post) => {
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
    </S.Container>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await api.get("/posts");
  const indexRandomPost = Math.floor(Math.random() * data.length);
  const postMain = data[indexRandomPost];

  return {
    props: {
      postMain,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
