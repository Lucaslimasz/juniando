import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5rem;
  background-color: var(--light-900);
  min-height: 100vh;
`;

export const Header = styled.div`
  background-color: var(--blue-dark);
  width: 100%;
  padding: 4.625rem 0;

  div {
    text-align: center;
    font-weight: 500;
    h1 {
      color: var(--white);
    }
    h2 {
      color: var(--yellow);
      font-size: 2rem;
      margin-top: 0.4rem;
    }
  }
`;

export const Body = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: auto;

  > h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2.625rem;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2.625rem 0;
`;

export const ContainerJobs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 950px) {
    gap: 0.75rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Job = styled.div`
  border-radius: 0.625rem;
  padding: 1.875rem;
  background-color: var(--white);
  box-shadow: 0px 0px 0.625rem rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;

  > b {
    margin-left: 0.625rem;
  }
`;

export const Mid = styled.div`
  margin: 10px 0 ;
  
  b {
    font-size: 1.125rem;
  }

  div {
    margin: 10px 0;
    h1,
    h2,
    h3, span, div, p, b, strong {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const Bot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.375rem 0.625rem;
    background: var(--blue-dark);
    color: var(--white);
    font-weight: 700;
    border-radius: 0.875rem;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: baseline;

    b {
      margin-bottom: 0.625rem;
    }
  }

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
