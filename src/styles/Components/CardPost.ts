import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 21rem;
  font-family: montserrat, sans-serif;

  img {
    border-radius: 0.875rem 0.875rem 0 0;
  }

  .InfosContainer {
    padding: 2.25rem 1.875rem;
    box-shadow: 0rem 0.0625rem 0.625rem rgba(0, 0, 0, 0.25);
    margin-top: -0.625rem;
    border-radius: 0rem 0rem 0.875rem 0.875rem;
    background-color: var(--white);
  }

  > .InfosContainer div {
    display: flex;
    align-items: center;

    p {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  > .InfosContainer div span {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 0.187rem;
    margin: 0rem 0.875rem;
    background-color: var(--blue-principal);
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.625rem 0;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.1rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;