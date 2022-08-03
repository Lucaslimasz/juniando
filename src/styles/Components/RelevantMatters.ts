import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  margin: 1.25rem auto;
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
    margin-top: 0.5rem;
    height: 0.125rem;
    border-radius: 0.875rem;
    border-top: 0.125rem solid var(--blue-principal);
  }

  > ul {
    list-style-type: none;

    > li {
      margin-top: 0.5rem;
      margin-bottom: 0.375rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.25rem;
      color: var(--dark-100);

      > img {
        margin-right: 0.75rem;
      }
    }

    > hr {
      width: 15.375rem;
      border-top: 0.0625rem solid var(--dark-50);
    }
  }
`;
