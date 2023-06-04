import * as S from "@styles/Components/Thumbnail";
import { useRouter } from "next/router";

interface IPropsThumbnail {
  title: string;
  author: string;
  date: string;
  background: string;
  id: string;
}

export default function Thumbnail({
  title,
  author,
  date,
  background,
  id,
}: IPropsThumbnail) {
  const router = useRouter();

  return (
    <S.Container bg={background} onClick={() => router.push(`/details/${id}`)}>
      <S.ContainerCategory>
        <S.Title>{title}</S.Title>
        <S.DivInfo>
          <S.Text>{author}</S.Text>
          <S.DotDetail></S.DotDetail>
          <S.Text>{date}</S.Text>
        </S.DivInfo>
      </S.ContainerCategory>
    </S.Container>
  );
}
