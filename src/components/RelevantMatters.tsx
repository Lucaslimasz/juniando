import * as S from "@styles/Components/RelevantMatters";
import Image from "next/image";

const RelevantMatters = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Assuntos Relevantes</h2>
        <hr />
        <ul>
          <li>
            <Image
              src="/assets/icons/matters-icon.svg"
              alt="Matter Arrow"
              width={7}
              height={12}
            />
            <span>JavaScript</span>
          </li>
          <hr />
          <li>
            <Image
              src="/assets/icons/matters-icon.svg"
              alt="Matter Arrow"
              width={7}
              height={12}
            />
            <span>Reactjs</span>
          </li>
          <hr />
          <li>
            <Image
              src="/assets/icons/matters-icon.svg"
              alt="Matter Arrow"
              width={7}
              height={12}
            />
            <span>Vuejs</span>
          </li>
          <hr />
          <li>
            <Image
              src="/assets/icons/matters-icon.svg"
              alt="Matter Arrow"
              width={7}
              height={12}
            />
            <span>AngularJs</span>
          </li>
          <hr />
        </ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default RelevantMatters;
