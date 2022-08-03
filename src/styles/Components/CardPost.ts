import styled from "styled-components";

export const Container = styled.div`
  width: 22.5rem;
  font-family: montserrat, Roboto, Ubuntu, sans-serif;

  .InfosContainer {
    padding: 2.25rem 1.875rem;
    box-shadow: 0rem 0.0625rem 0.625rem rgba(0, 0, 0, 0.25);
    margin: -0.625rem 0rem 0rem 0rem;
    border-radius: 0rem 0rem 0.875rem 0.875rem;
    background-color: var(--white);
  }

  > .InfosContainer div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > .InfosContainer div span {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    margin: 0rem 0.875rem;
    background-color: var(--blue-principal);
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.625rem 0;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.1rem;
  }
`;
