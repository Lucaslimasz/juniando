import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  display: flex;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 18.125rem;
  height: 14.875rem;
  display: grid;
  align-items: center;
  justify-content: center;
  background: var(--white);
  padding: 1.25rem;
  box-shadow: 0.125rem 0.125rem 1.25rem rgba(0, 0, 0, 0.2);
  border-radius: 0.875rem;

  position: sticky !important;
  top: 100px;

  > h2 {
    margin-top: 0.5rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
  }

  > hr {
    width: 6.5rem;
    margin: auto;
    margin: 0.5rem auto 0.75rem;
    height: 0.125rem;
    border-radius: 0.875rem;
    border-top: 0.125rem solid var(--blue-principal);
  }

  > ul {
    list-style-type: none;

    > li {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.25rem;
      color: var(--dark-100);

      padding: 8px 0 8px;
      width: 100%;

      cursor: pointer;

      display: flex;

      & + li {
        border-top: 0.1rem solid var(--dark-50);
      }

      p {
        margin-left: 0.5rem;
      }

      > b {
        margin-left: auto;
        font-size: 14px;
        font-weight: 500;
      }
    }

    > hr {
      width: 15.375rem;
    }
  }
`;
