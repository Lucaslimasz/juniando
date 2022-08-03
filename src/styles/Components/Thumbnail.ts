import styled from "styled-components";

interface IStyleThumbnail {
  bg: string;
}

export const Container = styled.div<IStyleThumbnail>`
  width: 745px;
  height: 412px;
  background-image: url(bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContainerCategory = styled.div`
  width: 100%;
  position: absolute;
  margin: 240px 0px 0px 40px;
`;

export const ButtonCategory = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 14px;
  width: 7rem;
  background-color: var(--blue-principal);
  color: #fff;
  margin-bottom: 10px;
`;

export const TextButton = styled.h3`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin: 16px 0px 12px 0px;
  color: #fff;
  font-weight: 700;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DotDetail = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0px 14px;
  background-color: var(--blue-principal);
`;

export const Text = styled.h3`
  font-size: 20px;
  color: #fff;
`;
