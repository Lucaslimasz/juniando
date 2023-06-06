import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 52.5rem;
  padding: 1rem 2.65rem;
  text-align: left;
  border-radius: 0.5rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  button {
    background-color: var(--blue-principal);
    color: var(--white);
    width: fit-content;
    padding-inline: 0.9rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.15),
      0px 4px 10px rgba(0, 0, 0, 0.15);
    margin-top: 2.25rem;
  }
`;
