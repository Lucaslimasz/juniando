import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@components/Button";
import { Input } from "@components/Input";

import * as S from "@styles/Pages";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Container data-aos="fade-left">
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
      <img src="/assets/login.png" alt="Login" data-aos="fade-right" />
    </S.Wrapper>
  );
};

export default Login;
