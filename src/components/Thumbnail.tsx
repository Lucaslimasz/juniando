import React, { HTMLAttributes } from "react";

import * as S from "@styles/Components/Thumbnail";

interface IPropsThumbnail extends HTMLAttributes<HTMLDivElement> {
  category: string;
  title: string;
  author: string;
  date: string;
  background: string;
}

export default function Thumbnail({
  category,
  title,
  author,
  date,
  background,
  ...rest
}: IPropsThumbnail) {
  return (
    <S.Container {...rest} bg={background}>
      <S.ContainerCategory>
        <S.ButtonCategory>
          <S.TextButton>{category}</S.TextButton>
        </S.ButtonCategory>
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
