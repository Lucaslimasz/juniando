import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 21rem;

  position: relative;

  &:hover {
    cursor: pointer;
  }
  img {
    border-radius: 0.875rem 0.875rem 0 0;
    object-fit: cover;
  }

  .InfosContainer {
    padding: 2.25rem 1.875rem;
    box-shadow: 0rem 0.0625rem 0.625rem rgba(0, 0, 0, 0.25);
    margin-top: -0.625rem;
    border-radius: 0rem 0rem 0.875rem 0.875rem;
    background-color: var(--white);
    > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 12px;
      margin-top: 6px;
      color: var(--dark-60);
    }

    > div {
      display: flex;
      align-items: center;

      p {
        font-size: 0.875rem;
        font-weight: 600;
      }

      > span {
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 0.187rem;
        margin: 0rem 0.875rem;
        background-color: var(--blue-mid);
      }

      @media (max-width: 380px) {
        span {
          display: none;
        }

        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        p:first-child {
          color: var(--blue-principal);
        }
      }
    }

    > p {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      b {
        display: inline;
      }
    }
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.625rem 0;
  }

  .content {
    font-size: 0.75rem;
    line-height: 1.1rem;

    h1,
    h2,
    h3 {
      font-size: 0.75rem;
      font-weight: 400;
    }

    a {
      pointer-events: none;
    }
  }
`;
