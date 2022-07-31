import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "@styles/Components/Input";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { icon, ...rest },
  ref
) => {
  return (
    <S.Container>
      {icon && <img src={icon} alt="e-mail" />}
      <S.Input ref={ref} {...rest} />
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
