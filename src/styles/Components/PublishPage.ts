import styled from "styled-components";

// Apagar os comentarios depois!

// Containers

export const Container = styled.div`
  height: 100vh;
  padding: 10vh 10vw;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f5;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 6rem;
  display: flex;
  background: #f0f0f5;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// Detailhes

export const Logo = styled.div`
  width: 100%;
  height: 4rem;
  margin-bottom: 3.4375rem;
  background: url("/assets/logo-preto-e-branco.svg") no-repeat;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 2.25rem;
  color: #13131a;
`;

export const Details = styled.p`
  width: 17.5rem;
  margin-bottom: 5.25rem;
  font-size: 1.125rem;
  line-height: 2rem;
  text-overflow: ellipsis;
  color: #737380;
`;

export const BackButton = styled.a`
  cursor: pointer;
  gap: 1rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1rem;
  color: #41414d;

  &::before {
    content: "";
    display: block;
    width: 1.875rem;
    height: 1.875rem;
    background: url("/assets/icons/arrow-left-blue.svg") no-repeat center;
  }
`;

// Inputs

export const InputArea = styled.div`
  max-width: 28.125rem;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Inputs = styled.div`
  flex: 1;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const InputItem = styled.input`
  height: 3.75rem;
  flex: 3;
  padding: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: #a8a8b3;
  background: var(--white);
  border: 2px solid #dcdce6;
  border-radius: 8px;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const InputSelect = styled.div`
  height: 3.75rem;
  padding: 0 1.5rem;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  line-height: 22px;
  color: #a8a8b3;
  background: var(--white);
  border: 2px solid #dcdce6;
  border-radius: 8px;
  user-select: none;

  &::after {
    content: "";
    width: 1.875rem;
    height: 1.875rem;
    display: block;
    background: url("/assets/icons/arrow-bottom.svg") no-repeat center;
  }
`;

export const UploadImage = styled.div`
  position: relative;
  height: 3.75rem;
  padding: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--dark-60);
  background: var(--white);
  border: 2px dashed #dcdce6;
  user-select: none;

  & span {
    margin-left: 0.625rem;
    cursor: pointer;
    font-size: 0.625rem;
    line-height: 0.75rem;
    color: #a8a8b3;
  }

  & input {
    position: absolute;
    width: 100%;
    left: 0;
    cursor: pointer;
    opacity: 0;
  }
`;

export const Buttons = styled.div`
  margin-top: 1rem;
  gap: 0.375rem;
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
  height: 3.75rem;
  flex: 3;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-align: center;
  color: #f0f0f5;
  background: #0565ff;
  border-radius: 8px;
`;

export const CancelButton = styled.button`
  height: 3.75rem;
  padding: 1.3125rem 3rem;
  gap: 0.625rem;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #41414d;
  border: 2.5px solid #dcdce6;
  border-radius: 8px;
`;

// Dropdown do Tema

export const Dropdown = styled.div`
  position: absolute;
  width: 17.1875rem;
  height: 10.3125rem;
  padding: 0.875rem 1.25rem;
  top: calc(9.75rem + 5px);
  right: 6rem;
  background: var(--white);
  border: 1px solid #a8a8b3;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const DropdownItem = styled.div`
  height: 1.375rem;
  margin: 6px 0;
  font: 400 1.125rem "Roboto";
  line-height: 1.3125rem;
  color: #a8a8b3;
  user-select: none;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const DropdownSeparator = styled.hr`
  flex: 1;
  border: 1px solid #a8a8b3;
`;
