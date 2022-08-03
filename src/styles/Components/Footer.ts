import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  min-height: 5rem;
  background: url("/assets/bg-footer.png") no-repeat center;
  background-size: cover;
  padding: 0 0.875rem;
`;

export const Container = styled.div`
  max-width: 70.625rem;
  margin: auto;
  padding: 3.6rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
    }

    textarea {
      background: var(--blue-dark);
      border-radius: 0.4rem;
      margin-bottom: 0.625rem;
      min-height: 8.75rem;
      padding: 1.25rem 0.75rem;
      font-size: 0.875rem;
      color: var(--white);

      resize: vertical;
      &::placeholder {
        color: var(--dark-50);
      }
    }

    input {
      width: 15.625rem;
      font-size: 0.875rem;
    }

    button {
      margin-left: 1.25rem;
      background: var(--yellow);
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 0.75rem;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
