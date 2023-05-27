import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;
  padding-top: 7rem;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    > div {
      width: 100vw;

      position: relative;
      left: -2rem;
      top: -1.5rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const MostViewed = styled.section`
  margin-top: 3.75rem;

  > h2 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 34px;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      max-width: 11.875rem;
      height: 0.125rem;
      background: var(--blue-principal);
      position: absolute;
      bottom: -0.625rem;
      left: 0;
    }
  }

  @media (max-width: 560px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 360px) {
    margin-top: 0.75rem;
  }
`;

export const ContainerCardPost = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 1120px) {
    gap: 1rem;
  }

  @media (max-width: 1104px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > div {
      width: 100%;
      max-width: 100%;
      > span {
        max-width: 100%;
        width: 100% !important;
      }
    }
  }

  @media (max-width: 944px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    display: flex;
  }

  @media (max-width: 450px) {
    > div {
      max-width: 100%;
    }
  }
`;
