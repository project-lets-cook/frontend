import { Input } from "./../Forms/Input/index";
import styled from "styled-components";

interface Ifocus {
  focus: boolean;
}

export const StyledSheradItens = styled.form`
  display: flex;
  align-items: center;
  width: 850px;
  height: 50px;
  background: var(--color-grey50);
  border-radius: 4px;
  position: absolute;
  top: -65px;
  right: 150px;
  border: 1px solid
    ${({ focus }: Ifocus) =>
      focus ? "var(--color-primary)" : "var(--color-grey300)"};

  > div {
    width: 200px;
    /* background-color: red; */
  }

  button {
    background-color: transparent;
    border: none;
    width: 10%;
    height: 90%;
  }
  svg {
    width: 100%;
    height: 50%;
    color: ${({ focus }: Ifocus) =>
      focus ? "var(--color-primary)" : "var(--color-grey300)"};
  }
  input {
    height: 60%;
    width: 90%;
    outline: none;
    border: none;
  }
`;
