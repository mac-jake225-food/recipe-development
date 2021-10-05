import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(232, 232, 232, 1)
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(119, 221, 119, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(119, 221, 119);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20%;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 99px 99px 99px 99px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #808080;
  &:hover {
    filter: brightness(1.03);
  }
`;