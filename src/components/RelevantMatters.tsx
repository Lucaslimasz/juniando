import * as S from "@styles/Components/RelevantMatters";
import { usePosts } from "hooks/usePosts";
import Image from "next/image";
import Link from "next/link";

const RelevantMatters = () => {
  const { posts } = usePosts();

  return (
    <S.Wrapper>
      <S.Container>
        <h2>Assuntos Relevantes</h2>
        <hr />
        <ul>
          {posts.map((post) => (
            <Link href={`/articles/${post.tag}`}>
              <li>
                <Image
                  src="/assets/icons/matters-icon.svg"
                  alt="Matter Arrow"
                  width={7}
                  height={12}
                />
                <p>{post.tag}</p>
                <b>({post.posts.length})</b>
              </li>
            </Link>
          ))}
        </ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default RelevantMatters;
