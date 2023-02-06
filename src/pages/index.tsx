import CardPost from "@components/CardPost";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";
import { formatDatePost } from "@utils/format-date-post";
import { usePosts } from "hooks/usePosts";
import LoadingPage from "@components/LoadingPage";

const Home = () => {
  const { posts } = usePosts();

  if (!posts) {
    return <LoadingPage />;
  }

  console.log(posts)

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
              />
            );
          })}
        </S.ContainerCardPost>
      </S.MostViewed>
    </S.Container>
  );
};

export default Home;
