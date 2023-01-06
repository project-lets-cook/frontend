import styled from "styled-components";

interface Ifocus {
  focus: boolean
}

export const StyledSheradItens = styled.form`
  width: 50%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  align-items: center;
  background: var(--color-grey50);
  border: 2px solid ${({ focus }: Ifocus) => (focus ? "var(--color-primary)" : "var(--color-grey300)")};
  border-radius: 8px;
  position: absolute;
  bottom: -10%;
  left: 25%;
  button {
    background-color: transparent;
    border: none;
    width: 10%;
    height: 90%;
  }
  svg{
    width: 100%;
    height: 50%;
    color:  ${({ focus }: Ifocus) => (focus ? "var(--color-primary)" : "var(--color-grey300)")};
  }
  input {
    height: 60%;
    width: 90%;
    outline: none;
    border: none;
  }
`;
