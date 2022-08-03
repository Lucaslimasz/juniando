import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";

import * as S from "@styles/Components/Header";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Image
          src="/assets/icons/logo-header.svg"
          alt="Juniando"
          width={174}
          height={41}
        />
        <Link href="/home">Home</Link>
        <Link href="/home">Artigos</Link>
        <Link href="/">Vagas</Link>
        <Link href="/">Sobre nós</Link>
        <Button title="Sign In" type="submit" />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
