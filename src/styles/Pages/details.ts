import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  background-color: var(--white);
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;
  padding-top: 7rem;

  margin-top: 2rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > span {
    border-radius: 0 0 1rem 1rem;
  }

  @media (max-width: 560px) {
    width: 116%;
    left: 0;
    position: relative;
    left: -10%;
    top: -23px;
  }

  @media (max-width: 360px) {
    width: 120%;
    left: 0;
    position: relative;
    left: -10%;
    top: -23px;
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
`;
