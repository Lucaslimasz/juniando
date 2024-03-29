import styled from "styled-components";

interface IStyleThumbnail {
  bg: string;
}

export const Container = styled.div<IStyleThumbnail>`
  width: 100%;
  height: 25.75rem;
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    width: 100%;
    height: 50%;
    background: linear-gradient(
      0deg,
      rgba(0, 51, 132, 1) 0%,
      rgba(0, 51, 132, 0) 100%
    );

    position: absolute;
    bottom: 0;
  }

  @media (max-width: 700px) {
    width: 105% !important;
  }
`;

export const ContainerCategory = styled.div`
  position: absolute;
  margin: 15rem 0rem 0rem 2.5rem;
  bottom: 2rem;
`;

export const ButtonCategory = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.625rem 1.375rem;
  border-radius: 0.875rem;
  width: 7rem;
  background-color: var(--blue-principal);
  color: var(--white);
  margin-bottom: 0.625rem;
`;

export const TextButton = styled.h3`
  font-size: 1rem;
  color: var(--white);
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  margin: 1rem 0rem 0.75rem 0rem;
  color: var(--white);
  font-weight: 700;

  @media (max-width: 560px) {
    font-size: 1.4rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DotDetail = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  margin: 0rem 0.875rem;
  background-color: var(--blue-principal);
`;

export const Text = styled.h3`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: 600;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;
