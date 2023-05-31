import styled from "styled-components";

interface PaginationItemProps {
  selected?: boolean;
  disable?: boolean;
}

export const PaginationContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin-top: 2rem;
  height: 40px;
  border-radius: 6px;
  background-color: var(--light-900);
`;

export const Container = styled.div`
  width: 23%;
  display: flex;
`;

export const PaginationItem = styled("li")<PaginationItemProps>`
  margin: 0 5px;
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  font-weight: 100;

  &:hover {
    background-color: var(--dark-50);
    ${(props) =>
      props.selected &&
      `
    background-color: var(--blue-principal);
    color: var(--white);
  `}
  }

  ${(props) =>
    props.selected &&
    `
    background-color: var(--blue-principal);
    color: var(--white);
  `}
  ${(props) =>
    props.disable &&
    `
   pointer-events: none;
  `}
`;

export const ArrowContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 6px 6px 6px 6px;

  &:hover {
    background-color: var(--dark-50);
  }

  &.leftArrow {
    padding: 6px 1px 6px 6px;
  }

  &.rightArrow {
    padding: 6px 6px 6px 1px;
  }
`;

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  transform: rotate(45deg);
  transition: transform 0.3s;

  &:hover {
    transform: rotate(45deg) scale(1.2);
  }

  &.left {
    transform: rotate(-135deg);
  }

  &.right {
    transform: rotate(45deg);
  }
`;

export const Dots = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: var(--dark-80);
  font-weight: bold;
`;
