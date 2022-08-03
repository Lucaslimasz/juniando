import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";
import { Input } from "@components/Input";

import * as S from "@styles/Pages";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <S.Wrapper>
      <S.Container>
        <form>
          <Image
            src="/assets/icons/logo.svg"
            alt="Juniando"
            width={252}
            height={200}
          />
          <h1>Faça seu login</h1>
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
          <Button title="Entrar" type="submit" />
          <Link href="/">Esqueceu a senha?</Link>
          <span>
            <Image
              src="/assets/icons/create.svg"
              alt="Criar"
              width={24}
              height={24}
            />
            <Link href="/register">Criar conta</Link>
          </span>
        </form>
      </S.Container>
      <img src="/assets/login.png" alt="Login" />
    </S.Wrapper>
  );
};

export default Login;
