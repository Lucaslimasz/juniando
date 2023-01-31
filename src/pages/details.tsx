import Header from "@components/Header";
import RelevantMatters from "@components/RelevantMatters";

import * as S from "@styles/Pages/details";
import Image from "next/image";

import { text } from "../../exemple.js";

const Details = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <h1>Por que e pra que usar Reactjs?</h1>
          <S.DivInfo>
            <S.Text>Lucas Lima</S.Text>
            <S.DotDetail></S.DotDetail>
            <S.Text>28/09/2012</S.Text>
          </S.DivInfo>
          <S.Top>
            <Image
              src="/assets/banner-thumbnail.png"
              width={700}
              height={400}
            />
            <RelevantMatters />
          </S.Top>
          <S.Body>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </S.Body>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Details;
