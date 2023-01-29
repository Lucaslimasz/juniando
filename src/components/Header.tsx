import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@components/Button";

import * as S from "@styles/Components/Header";

const Header = () => {
  const router = useRouter();

  const routes = [
    {
      name: "Home",
      route: "/home",
    },
    {
      name: "Artigos",
      route: "/articles",
    },
    {
      name: "Vagas",
      route: "/",
    },
    {
      name: "Sobre nós",
      route: "/",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Image
          src="/assets/icons/logo-header.svg"
          alt="Juniando"
          width={174}
          height={41}
        />
        {routes.map(({ name, route }) => (
          <Link className="menus" key={name} href={route}>
            <a
              style={
                route === router.pathname
                  ? {
                      textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#0565FF",
                      textUnderlineOffset: 7,
                      color: "#202020",
                    }
                  : {}
              }
            >
              {name}
            </a>
          </Link>
        ))}
        <Button title="Sign In" type="submit" />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
