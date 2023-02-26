import * as S from "@styles/Components/RelevantMatters";
import { usePosts } from "hooks/usePosts";
import Image from "next/image";
import Link from "next/link";

const RelevantMatters = () => {
  const { posts, categories } = usePosts();

  const currentCategories = categories.filter((_, index) => index < 4);

  return (
    <S.Wrapper>
      <S.Container>
        <h2>Assuntos Relevantes</h2>
        <hr />
        <ul>
          {currentCategories.map((category) => (
            <Link key={category._id} href={`/articles/${category.name}`}>
              <li>
                <Image
                  src="/assets/icons/matters-icon.svg"
                  alt="Matter Arrow"
                  width={7}
                  height={12}
                />
                <p>{category.name}</p>
                <b>
                  (
                  {
                    posts.filter((item) => item.category === category._id)
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
