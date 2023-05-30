import CardPost from "@components/CardPost";
import Tags from "@components/Tags";
import * as S from "@styles/Pages/articles";
import { usePosts } from "hooks/usePosts";
import { useEffect, useState } from "react";
import { formatDatePost } from "@utils/format-date-post";
import LoadingPage from "@components/LoadingPage";
import Pagination from "@components/Pagination";
import { LIMIT, PAGE_SIZE } from "..";
import { api } from "@config/api";
import { IPost, IPosts } from "@interfaces/posts";

interface ICategories {
  name: string;
  _id: string;
}

const Articles = () => {
  const { categories } = usePosts();

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [posts, setPosts] = useState<IPosts>();

  const [categorySelected, setCategorySelected] = useState<ICategories | null>(
    null
  );

  useEffect(() => {
    if (categorySelected) {
      api
        .get(`/posts/${categorySelected?._id}`, {
          params: {
            page: page,
            limit: LIMIT,
          },
        })
        .then((response) => {
          setPosts(response.data);
          setPage(response.data.currentPage);
          setTotal(response.data.totalPages);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [page, categorySelected]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCategorySelected(categories[0]);
      setPage(1); // Reset page when category changes
    }
  }, [categories]);

  const handleCategorySelected = (categoryName: string) => {
    const selectedCategory = categories.find(
      (category) => category.name === categoryName
    );
    if (selectedCategory) {
      setCategorySelected(selectedCategory);
    }
  };

  if (!posts || !categories) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <S.Tags>
        {categories.map((category: ICategories) => (
          <Tags
            key={category._id}
            title={category.name}
            active={category._id === categorySelected?._id}
            onClick={() => handleCategorySelected(category.name)}
          />
        ))}
      </S.Tags>
      <S.Posts>
        {posts.posts
          .filter((item: IPost) => item.category === categorySelected?._id)
          .map((post: IPost) => {
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
      </S.Posts>

      <Pagination
        totalCount={total}
        onPageChange={setPage}
        currentPage={page}
        pageSize={PAGE_SIZE}
      />
    </S.Container>
  );
};

export default Articles;
