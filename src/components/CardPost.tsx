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
  viewQuantity: number;
}

export default function CardPost({
  id,
  title,
  content,
  author,
  date,
  image,
  viewQuantity,
}: IPropsCardPost) {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(`/details/${id}`)}>
      <Image src={image} width={360} height={227} />
      <div className="InfosContainer">
        <div>
          <p>{author}</p>
          <span></span>
          <p>{date}</p>
        </div>
        <span>
          <Image src="/assets/icons/eye.svg" width={15} height={15} />{" "}
          {viewQuantity} Views
        </span>
        <h1>{title}</h1>
        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: `${content.replaceAll("&nbsp;", " ")}`,
          }}
        />
      </div>
    </S.Container>
  );
}
