import Image from "next/image";
import * as S from "@styles/Components/CardPost";

interface IPropsCardPost {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export default function CardPost({
  title,
  content,
  author,
  date,
  image,
}: IPropsCardPost) {
  return (
    <S.Container>
      <Image src={image} width={360} height={227} />
      <div className="InfosContainer">
        <div>
          <p>{author}</p>
          <span></span>
          <p>{date}</p>
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </S.Container>
  );
}
