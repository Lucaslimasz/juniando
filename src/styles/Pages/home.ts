import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  background-color: var(--white);
`;

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

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
