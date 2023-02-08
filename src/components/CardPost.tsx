import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "@styles/Components/CardPost";

interface IPropsCardPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export default function CardPost({
  id,
  title,
  content,
  author,
  date,
  image,
}: IPropsCardPost) {
  const router = useRouter();

  const width = window.innerWidth;

  return (
    <S.Container onClick={() => router.push(`/details/${id}`)}>
      <Image src={image} width={360} height={227} />
      <div className="InfosContainer">
        <div>
          <p>{author}</p>
          <span></span>
          <p>{date}</p>
        </div>
        <h1>{title}</h1>
        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: `${content
              .replaceAll("&nbsp;", " ")
              .substring(0, width < 630 ? 400 : 300)}...`,
          }}
        />
      </div>
    </S.Container>
  );
}
