import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@components/Button";

import * as S from "@styles/Components/Header";

import { usePosts } from "hooks/usePosts";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const { categories } = usePosts();
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Artigos",
      route: "/articles",
    },
    {
      name: "Vagas",
      route: "/jobs",
    },
    {
      name: "Sobre nós",
      route: "/about",
    },
  ];

  const handleActiveMenu = () => {
    setIsActiveMenu((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Link href="/">
          <Image
            src="/assets/icons/logo-header.svg"
            alt="Juniando"
            width={174}
            height={41}
          />
        </Link>
        {routes.map(({ name, route }) => {
          let routeName = "";
          if (route === "/articles") {
            routeName = `/articles/${categories[0]?.name}`;
          } else {
            routeName = route;
          }
          return (
            <Link className="menus" key={name} href={routeName}>
              <a
                style={
                  route === `/${router.pathname.split("/")[1]}`
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
          );
        })}
        <Button
          title="Sign In"
          type="submit"
          onClick={() => router.push("/auth")}
          className="signin"
        />
        <button className="menu-hamburguer" onClick={handleActiveMenu}>
          {isActiveMenu ? (
            <img src="/assets/icons/close-menu.svg" alt="menu-hamburguer" />
          ) : (
            <img
              src="/assets/icons/menu-hamburguer.svg"
              alt="menu-hamburguer"
            />
          )}
        </button>
      </S.Container>

      {isActiveMenu && (
        <S.ContainerMenu>
          {routes.map(({ name, route }) => {
            let routeName = "";
            if (route === "/articles") {
              routeName = `/articles/${categories[0]?.name}`;
            } else {
              routeName = route;
            }
            return (
              <Link key={name} href={routeName}>
                <a onClick={() => setIsActiveMenu(false)}>{name}</a>
              </Link>
            );
          })}
          <Link href="/auth">
            <a style={{ color: "#0565FF", fontWeight: "800" }}>SignIn</a>
          </Link>
        </S.ContainerMenu>
      )}
    </S.Wrapper>
  );
};

export default Header;
