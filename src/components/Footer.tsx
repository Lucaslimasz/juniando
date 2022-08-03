import Image from "next/image";
import React from "react";

import * as S from "@styles/Components/Footer";
import { Input } from "./Input";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Container>
        <Image
          src="/assets/icons/logo-big.svg"
          alt="logo"
          width={242}
          height={167}
        />

        <Image
          className="computer"
          src="/assets/computer.svg"
          width={200}
          height={200}
        />

        <div>
          <textarea placeholder="Deixe sua mensagem" />
          <div>
            <Input placeholder="Digite seu e-mail" />
            <button>
              <Image
                src="/assets/icons/arrow-right.svg"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
}
