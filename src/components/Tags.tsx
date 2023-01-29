import React, { ButtonHTMLAttributes } from "react";

import * as S from "@styles/Components/Tags";

interface TagsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

export default function Tags({ title, active, ...rest }: TagsProps) {
  return (
    <S.Container {...rest} active={active}>
      {title}
    </S.Container>
  );
}
