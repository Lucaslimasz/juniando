import styled from "styled-components";

export const Container = styled.button<{ active: boolean }>`
  padding: 1rem 1.75rem;
  border-radius: 0.75rem;
  background: ${({ active }) => (active ? "var(--blue-mid)" : "var(--white)")};
  color: ${({ active }) => (active ? "var(--white)" : "var(var(--dark-100))")};
  font-family: Montserrat;
  font-weight: bold;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    padding: 0.7rem 1rem;
    font-size: 0.875rem;
  }
`;
