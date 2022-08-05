import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const Container = styled.div<{ error: boolean }>`
  max-width: 21.25rem;
  background: var(--blue-dark);

  display: flex;
  align-items: center;
  padding: 1.125rem 1rem;
  border-radius: 0.75rem;

  border: ${({ error }) => error && "1px solid rgba(255, 255, 0, .8)"};
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  margin-left: 0.75rem;
  font-family: Montserrat;
  color: var(--white);
  &::placeholder {
    color: var(--dark-50);
  }
`;

export const Error = styled.p`
  text-align: left;
  margin-top: 0.6rem;
  color: var(--yellow);
`;
