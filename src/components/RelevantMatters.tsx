import * as S from "@styles/Components/RelevantMatters";

const RelevantMatters = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Assuntos Relevantes</h2>
        <hr />
        <ul>
          <li>
            <img src="/assets/icons/matters-icon.svg" alt="Matter Arrow" />
            JavaScript
          </li>
          <hr />
          <li>
            <img src="/assets/icons/matters-icon.svg" alt="Matter Arrow" />
            Reactjs
          </li>
          <hr />
          <li>
            <img src="/assets/icons/matters-icon.svg" alt="Matter Arrow" />
            Vuejs
          </li>
          <hr />
          <li>
            <img src="/assets/icons/matters-icon.svg" alt="Matter Arrow" />
            AngularJs
          </li>
          <hr />
        </ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default RelevantMatters;
