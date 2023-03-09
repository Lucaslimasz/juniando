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

  .signin {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7rem;
    height: 2.75rem;
    border-radius: 1.5rem;
    background: var(--blue-principal);
    font-family: Montserrat;
    color: white;
    font-weight: 700;
    font-size: 1rem;
  }

  .logout {
    display: flex;
    align-items: center;

    button {
      background-color: var(--red);
      padding: 0.5rem 1.4rem;
      border-radius: 1.5rem 0 0 1.5rem;
      color: white;
      font-weight: 600;
      font-size: 1rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      position: relative;
      right: -0.8rem;
    }

    position: relative;

    > div {
      display: flex;
      align-items: center;

      &:hover {
        > div {
          display: inherit;
        }
      }

      > img {
        border-radius: 3rem;
        z-index: 1;
        border: 4px solid #fff;
        cursor: pointer;
      }

      > div {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.6);
        width: 2rem;
        height: 2rem;
        border-radius: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0.25rem;
        z-index: 1;
        display: none;

        > img {
          width: 1rem;
        }
      }
    }
  }

  .menu-hamburguer {
    display: none;
  }

  @media (max-width: 750px) {
    > a,
    .signin {
      display: none;
    }

    .logout {
      display: none;
    }

    .menu-hamburguer {
      display: initial;
      background-color: transparent;
      z-index: 1000;
      > img {
        width: 35px;
      }
    }
  }

  @media (max-width: 400px) {
    // logo
    > span {
      width: 10rem !important;
    }
  }
`;

export const ContainerMenu = styled.div`
  display: none;
  @media (max-width: 750px) {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 0;

    a {
      padding-bottom: 20px;
      font-size: 32px;
      font-weight: 600;
      color: var(--white);
    }
  }
`;
