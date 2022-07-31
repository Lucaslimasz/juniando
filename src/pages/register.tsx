import { useRef } from "react";
import Link from "next/link";

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
          <img src="/assets/icons/logo.svg" alt="Juniando" />
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
            <img src="/assets/icons/arrow-left.svg" alt="Criar" />
            <Link href="/">Voltar para o login</Link>
          </span>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
