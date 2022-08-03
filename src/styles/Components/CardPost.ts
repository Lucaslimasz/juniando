import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 227px;

  .InfosContainer {
    padding: 35px 30px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    margin: -10px 0px 0px 0px;
    border-radius: 0px 0px 14px 14px;
  }

  > .InfosContainer div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > .InfosContainer div span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: 0px 14px;
    background-color: var(--blue-principal);
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
  }

  p {
    font-size: 12px;
    line-height: 1.1rem;
  }
`;
