import * as S from "@styles/Components/Header";
import Link from "next/link";
import Button from "@components/Button";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <img src="/assets/icons/logo-header.svg" alt="Juniando" />
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
