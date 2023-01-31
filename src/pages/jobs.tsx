import CardPost from "@components/CardPost";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";
import { usePosts } from "hooks/usePosts";

const Home = () => {
  const { posts } = usePosts();
  const postPrincipal = posts[0]?.posts;

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
          {postPrincipal?.map((post) => (
            <CardPost
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              image={post.image}
            />
          ))}
        </S.ContainerCardPost>
      </S.MostViewed>
    </S.Container>
  );
};

export default Home;
