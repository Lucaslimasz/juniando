import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;
  padding-top: 7rem;

  margin-top: 2rem;
  background-color: var(--white);
  overflow-x: hidden;

  @media (max-width: 500px) {
    padding: 7rem 1rem 0;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > span {
    border-radius: 0 0 1rem 1rem;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 560px) {
    width: 103.5vw;
    left: 0;
    position: relative;
    left: -10%;

    > span {
      border-radius: 0 0 1rem 0;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0 1.75rem;
`;

export const Text = styled.h3`
  font-size: 1rem;
  color: var(--dark-100);
  font-weight: 600;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const DotDetail = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  margin: 0rem 0.875rem;
  background-color: var(--blue-principal);
`;

export const Body = styled.div`
  color: var(--dark-100);
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-top: 2.125rem;
  /* max-width: 43.75rem; */

  > div {
    word-break: break-word;
  }
`;
