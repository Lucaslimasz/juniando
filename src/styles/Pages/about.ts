import styled from "styled-components";

import bgImage from "../../../public/assets/about-bg1.png";

export const Main = styled.main`
  background-image: url(${bgImage.src});
  color: var(--white);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  display: flex;
  align-items: end;
  flex: 1;
  margin-top: 5rem;
  max-height: 90vh;
  height: calc(100vh - 4rem);

  div {
    max-width: 32.75rem;
    padding-left: 9.75rem;
    padding-bottom: 7rem;

    h1 {
      font-size: 3.25rem;
    }

    p {
      margin-top: 0.75rem;
      font-size: 1.375rem;
    }
  }

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;

    div {
      padding: unset;

      h1,
      p {
        text-shadow: 0 0 1.25rem black;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: #f0f0f5;
  max-height: 40rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 2rem;
  padding-left: 9.6rem;
  align-items: center;
  justify-items: center;
  padding-block: 5rem;

  div {
    h2 {
      font-size: 2rem;
    }

    p {
      margin-top: 1.75rem;
      font-size: 1.375rem;
    }

    img {
      width: 27.25rem;
      height: 29.75rem;
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 24px;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: unset;
    padding-inline: 3rem;

    div {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

    div:nth-child(2) {
      display: none;
    }
  }
`;
