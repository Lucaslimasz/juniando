import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--blue-mid);

  display: flex;

  > img {
    width: 50%;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    > img {
      display: none;
    }
  }
`;

export const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    > img {
      width: 15.75rem;
      margin: auto;
    }

    > h1 {
      font-size: 1.5rem;
      margin: 3rem 0 1.5rem 0;
      color: var(--light-900);
      font-family: Montserrat, sans-serif;
      font-weight: bold;
    }

    > div {
      & + div {
        margin-top: 0.5rem;
      }
    }

    > button {
      margin-top: 1.5rem;
    }

    > a {
      margin: 1.5rem 0 4rem;
      font-weight: 300;
      color: var(--light-900);
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 0.75rem;
      }
      a {
        color: var(--yellow);
      }
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 0 0.625rem;
  }
`;
