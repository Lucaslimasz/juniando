import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "@styles/Components/Input";
import Image from "next/image";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error?: string | boolean;
  color?: "light";
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { icon, error, color, ...rest },
  ref
) => {
  return (
    <S.Wrapper>
      <S.Container color={color} error={!!error}>
        {icon && <Image src={icon} alt="e-mail" width={24} height={22} />}
        <S.Input color={color} ref={ref} {...rest} />
      </S.Container>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
