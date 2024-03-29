import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Posts = styled.div`
  gap: 1.5rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    > div {
      max-width: 100%;
      > span {
        max-width: 100%;
        width: 100% !important;
      }
    }
  }

  @media (max-width: 500px) {
    gap: 0.7rem;
  }

  @media (max-width: 460px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
  padding: 120px 0 5px;
  overflow-x: auto;

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0);
  }
`;
