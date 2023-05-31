import * as S from "@styles/Pages/about";
import Image from "next/image";

import peopleImg from "../../public/assets/about-people.png";

const About = () => {
  return (
    <>
      <S.Main>
        <div>
          <h1>
            Nosso foco é transformar
            <br /> vidas!
          </h1>
          <p>
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar a sua carreira.
          </p>
        </div>
      </S.Main>
      <S.Container>
        <div>
          <h2>Quem somos?</h2>
          <p>
            Somos uma equipe de desenvolvedores que se uniram com o propósito de
            alavancar a carreira daqueles que estão iniciando na área de
            programação, e se sentem meio perdidos sobre por onde começar a
            estudar e onde encontrar vagas para o primeiro emprego. Sabemos o
            quanto o começo dessa caminhada é difícil, e nos unimos com o
            objetivo de facilitar a sua jornada como desenvolvedor. Vamos
            avançar juntos?
          </p>
        </div>
        <div>
          <Image
            src={peopleImg}
            alt="Foto de homem em um escritório sorrindo para a câmera e segurando um notebook"
            width={436}
            height={476}
          />
        </div>
      </S.Container>
    </>
  );
};

export default About;
