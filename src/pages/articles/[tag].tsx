import { useRouter } from "next/router";

import CardPost from "@components/CardPost";
import Tags from "@components/Tags";

import * as S from "@styles/Pages/articles";

import { usePosts } from "hooks/usePosts";
import { useEffect } from "react";

const Articles = () => {
  const router = useRouter();
  const { handleTag, posts, tag } = usePosts();

  useEffect(() => {
    if (router.query.tag) {
      return handleTag(router.query.tag.toString());
    }

    return handleTag(posts[0]?.tag);
  }, []);

  return (
    <S.Container>
      <S.Tags>
        {posts?.map((post) => (
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
          ?.filter((tags) => tags.tag === tag)
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
  );
};

export default Articles;