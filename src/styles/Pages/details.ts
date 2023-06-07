import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;
  padding-top: 5rem;

  margin-top: 2rem;
  background-color: var(--white);
  overflow-x: hidden;

  @media (max-width: 500px) {
    padding: 5rem 1rem 0;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;

  > span {
    border-radius: 0 0 1rem 1rem;
  }

  img {
    object-fit: cover !important;
  }

  @media (max-width: 1000px) {
    span {
      width: 100% !important;
    }
  }

  @media (max-width: 560px) {
    width: 100vw;
    position: relative;
    left: -2rem;

    > span {
      border-radius: 0;
    }
  }

  @media (max-width: 500px) {
    left: -1rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0 1rem;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-left: 1rem;
  }
  @media (max-width: 410px) {
    button {
      margin-left: 0;
      margin-top: 0.75rem;
    }
  }
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
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    > div {
      img {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
`;
