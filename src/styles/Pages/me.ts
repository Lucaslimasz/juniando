import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 70rem;
  padding: 8rem 2rem 4rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 6.25rem;
    border: 0.5rem solid var(--red);
    margin-bottom: 1.25rem;
  }

  > div {
    width: 500px !important;
    div {
      max-width: 100%;
    }
  }
`;
