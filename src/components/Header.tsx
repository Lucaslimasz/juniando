import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@components/Button";

import * as S from "@styles/Components/Header";

import { usePosts } from "hooks/usePosts";

const Header = () => {
  const router = useRouter();
  const { posts } = usePosts();

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
      route: "/jobs",
    },
    {
      name: "Sobre nós",
      route: "/",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Link href="/home">
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
            routeName = `/articles/${posts[0]?.tag}`;
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
        <Button title="Sign In" type="submit" />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
