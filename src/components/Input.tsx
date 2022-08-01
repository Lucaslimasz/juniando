import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "@styles/Components/Input";
import Image from "next/image";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { icon, ...rest },
  ref
) => {
  return (
    <S.Container>
      {icon && <Image src={icon} alt="e-mail" width={24} height={22} />}
      <S.Input ref={ref} {...rest} />
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
