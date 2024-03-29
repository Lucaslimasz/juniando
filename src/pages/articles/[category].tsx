import CardPost from "@components/CardPost";
import Tags from "@components/Tags";

import * as S from "@styles/Pages/articles";

import { usePosts } from "hooks/usePosts";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { formatDatePost } from "@utils/format-date-post";
import LoadingPage from "@components/LoadingPage";

interface ICategories {
  name: string;
  _id: string;
}

interface IArticlesProps {
  currentCategory: string;
}

const Articles = ({ currentCategory }: IArticlesProps) => {
  const { posts, categories } = usePosts();
  // const router = useRouter();

  const [categorySelected, setCategorySelected] = useState<ICategories>(
    {} as ICategories
  );

  useEffect(() => {
    (() => {
      if (currentCategory) {
        const reponse = categories.filter(
          (item) => item.name === currentCategory
        )[0];
        setCategorySelected(reponse);
      } else {
        return setCategorySelected(categories[0]);
      }
    })();
  }, [posts, categories]);

  const handleCategorySelected = (category: string) => {
    setCategorySelected(categories.filter((item) => item.name === category)[0]);
  };

  if (!posts || !categories) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <S.Tags>
        {categories?.map((category) => (
          <Tags
            key={category._id}
            title={category.name}
            active={category.name == categorySelected?.name}
            onClick={() => handleCategorySelected(category.name)}
          />
        ))}
      </S.Tags>
      <S.Posts>
        {posts.posts
          ?.filter((item) => item.category === categorySelected?._id)
          .map((post) => {
            return (
              <CardPost
                key={post._id}
                slug={post.slug}
                title={post.title}
                content={post.content}
                author={post.author}
                date={formatDatePost(post.createdAt)}
                image={post.image}
                viewQuantity={post.viewQuantity}
              />
            );
          })}
      </S.Posts>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category } = ctx.query;

  return {
    props: {
      currentCategory: category,
    },
  };
};

export default Articles;
