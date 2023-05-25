import * as S from "@styles/Components/RelevantMatters";
import { usePosts } from "hooks/usePosts";
import Image from "next/image";
import Link from "next/link";

interface CategoryCount {
  [categoryId: string]: number;
}

const RelevantMatters = () => {
  const { posts, categories } = usePosts();

  const currentCategoriesSorted = () => {
    const categoryCount: CategoryCount = {};

    posts.forEach((post) => {
      const categoryId = post.category;
      if (categoryCount[categoryId]) {
        categoryCount[categoryId]++;
      } else {
        categoryCount[categoryId] = 1;
      }
    });

    const categoryCountArray = Object.entries(categoryCount);
    categoryCountArray.sort((a, b) => b[1] - a[1]);
    const topCategories = categoryCountArray.slice(0, 4);

    const topCategoriesObjects = topCategories.map((category) => {
      return categories.find((item) => item._id === category[0]);
    });

    return topCategoriesObjects;
  };

  return (
    <S.Wrapper>
      <S.Container>
        <h2>Assuntos Relevantes</h2>
        <hr />
        <ul>
          {currentCategoriesSorted().map((category) => (
            <Link key={category?._id} href={`/articles/${category?.name}`}>
              <li>
                <Image
                  src="/assets/icons/matters-icon.svg"
                  alt="Matter Arrow"
                  width={7}
                  height={12}
                />
                <p>{category?.name}</p>
                <b>
                  (
                  {
                    posts.filter((item) => item.category === category?._id)
                      .length
                  }
                  )
                </b>
              </li>
            </Link>
          ))}
        </ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default RelevantMatters;
