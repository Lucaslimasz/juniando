import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;

  z-index: 1000;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 69.375rem;
  padding: 0 2rem;
  a {
    span {
      cursor: pointer;
    }
  }

  > img {
    width: 8rem;
    object-fit: cover;
  }

  > a {
    position: relative;
    text-decoration: none;
    color: var(--dark-60);
    font-weight: 600;
    font-family: Montserrat;

    &:last-child {
      text-decoration: underline;
      color: var(--dark-100);
      background: red;
    }

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.125rem;
      background: var(--blue-principal);
      left: 0;
      bottom: -0.25rem;
      transition: 0.2s;
    }
    &:hover:after {
      width: 100%;
      text-decoration: underline;
    }
    &:hover {
      color: var(--dark-100);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7rem;
    height: 2.75rem;
    border-radius: 1.5rem;
    color: white;
    background: var(--blue-principal);
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
  }

  @media (max-width: 630px) {
    > a {
      display: none;
    }
  }

  @media (max-width: 400px) {
    // logo
    > span {
      width: 10rem !important;
    }
  }
`;
