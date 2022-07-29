import React, { ButtonHTMLAttributes } from "react";

import * as S from "@styles/Components/Button";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...rest }: IButton) {
  return <S.Container {...rest}>{title}</S.Container>;
}
