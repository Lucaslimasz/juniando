import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";
import { Input } from "@components/Input";

import * as S from "@styles/Pages/register";

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <S.Wrapper>
      <img src="/assets/login.png" alt="Login" />
      <S.Container>
        <form>
          <Image
            src="/assets/icons/logo.svg"
            alt="Juniando"
            width={252}
            height={202}
          />
          <h1>Registre-se</h1>
          <Input
            icon="/assets/icons/email.svg"
            placeholder="E-mail"
            ref={emailRef}
          />
          <Input
            icon="/assets/icons/password.svg"
            placeholder="Senha"
            ref={passwordRef}
          />
          <Input
            icon="/assets/icons/password.svg"
            placeholder="Confirmar senha"
            ref={passwordRef}
          />
          <Button title="Criar conta" type="submit" />

          <span>
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Criar"
              width={24}
              height={24}
            />
            <Link href="/">Voltar para o login</Link>
          </span>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
