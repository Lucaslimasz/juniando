import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

interface ContainerProps {
  error: boolean;
  color?: "light";
}

export const Container = styled.div<ContainerProps>`
  max-width: 21.25rem;
  background: var(--blue-dark);

  display: flex;
  align-items: center;
  padding: 1.125rem 1rem;
  border-radius: 0.75rem;

  border: ${({ error }) => error && "1px solid rgba(255, 255, 0, .8)"};
  color: var(--white);

  ${({ color }) =>
    color === "light" &&
    css`
      background: var(--dark-50);
    `}
`;

export const Input = styled.input<{ color?: "light" }>`
  width: 100%;
  background: transparent;
  margin-left: 0.75rem;
  font-family: Montserrat;
  color: var(--white);
  ${({ color }) =>
    color === "light" &&
    css`
      color: var(--dark-100);
      &::placeholder {
        color: var(--dark-100);
      }
    `}
`;

export const Error = styled.p`
  text-align: left;
  margin-top: 0.6rem;
  color: var(--yellow);
`;
