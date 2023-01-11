import styled from "styled-components";

interface Ifocus {
  focus: boolean;
}

export const StyledSearchItens = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  background: var(--color-grey50);
  border-radius: 4px;
  position: absolute;
  top: -60px;
  right: 330px;

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
    margin-top: 5px;
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

    ::placeholder {
      color: var(--color-grey300);
      font-size: 14px;
    }
  }

  @media screen and (max-width: 520px) {
    width: 250px;
    height: 35px;
    top: -41px;
    left: 15px;
  }
`;
