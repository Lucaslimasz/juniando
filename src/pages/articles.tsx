import CardPost from "@components/CardPost";
import Header from "@components/Header";
import Tags from "@components/Tags";

import * as S from "@styles/Pages/articles";
import { useState } from "react";

const Home = () => {
  const posts = [
    {
      id: String(Math.random()),
      tag: "Reactjs",
      posts: [
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
      ],
    },
    {
      id: String(Math.random()),
      tag: "Javascript",
      posts: [
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown when an unknown when an unknown when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
        {
          id: String(Math.random()),
          title: "Por que e pra que usar Javascript?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
          author: "Lucas Lima",
          date: "09 de Jul de 2022",
          image: "/assets/banner-thumbnail.png",
        },
      ],
    },
  ];
  const [tag, setTag] = useState<string>(posts[0].tag);

  const handleTag = (title: string) => {
    setTag(title);
  };

  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <S.Tags>
            {posts.map((post) => (
              <Tags
                key={post.id}
                title={post.tag}
                active={post.tag === tag}
                onClick={() => handleTag(post.tag)}
              />
            ))}
          </S.Tags>
          <S.Posts>
            {posts
              .filter((tags) => tags.tag === tag)
              .map((filteredPosts) =>
                filteredPosts.posts.map((post) => (
                  <CardPost
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    image={post.image}
                  />
                ))
              )}
          </S.Posts>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Home;
