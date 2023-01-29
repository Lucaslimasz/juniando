import CardPost from "@components/CardPost";
import Header from "@components/Header";
import RelevantMatters from "@components/RelevantMatters";
import Thumbnail from "@components/Thumbnail";

import * as S from "@styles/Pages/home";

const Home = () => {
  const posts = [
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown when an unknown when an unknown when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
    {
      id: String(Math.random()),
      title: "Por que e pra que usar ReactJs?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
      author: "Lucas Lima",
      date: "09 de Jul de 2022",
      image: "/assets/banner-thumbnail.png",
    },
  ];

  return (
    <>
      <S.Wrapper>
        <Header />
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
              {posts.map((post) => (
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
      </S.Wrapper>
    </>
  );
};

export default Home;
