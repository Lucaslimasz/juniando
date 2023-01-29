import CardPost from "@components/CardPost";
import Header from "@components/Header";
import Tags from "@components/Tags";

import * as S from "@styles/Pages/articles";

import { usePosts } from "hooks/usePosts";

const Articles = () => {
  const { handleTag, posts, tag } = usePosts();

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

export default Articles;
