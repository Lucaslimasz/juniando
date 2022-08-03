import Image from "next/image";

import * as S from "@styles/Components/CardPost";

import React, { HTMLAttributes } from "react";

interface IPropsCardPost extends HTMLAttributes<HTMLDivElement> {
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
  ...rest
}: IPropsCardPost) {
  return (
    <S.Container {...rest}>
      <Image src={image} width={360} height={227} />
      <div className="InfosContainer">
        <div>
          <h3>{author}</h3>
          <span></span>
          <h3>{date}</h3>
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </S.Container>
  );
}
