import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 9.75rem;

  > img {
    width: 11rem;
    object-fit: cover;
  }

  > a {
    position: relative;
    text-decoration: none;
    color: var(--dark-60);
    font-weight: 600;
    font-family: Montserrat;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.125rem;
      background: var(--main-blue);
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
    &:active:active {
      color: red;
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
    background: var(--principal-blue);
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
