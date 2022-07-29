import styled from "styled-components";

export const Container = styled.div`
  max-width: 21.25rem;
  background: var(--dark-blue);

  display: flex;
  align-items: center;
  padding: 1.125rem 1rem;
  border-radius: 0.75rem;
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
