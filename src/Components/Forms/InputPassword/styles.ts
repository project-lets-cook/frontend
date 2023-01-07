import styled from "styled-components";

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid var(--color-grey300);
  outline-style: none;
  position: relative;
  /* height: 50px; */

  :focus-within {
    border-bottom: 3px solid var(--color-primary);
    outline-style: none;
    & > label {
      color: var(--color-primary);
    }
  }
  :hover {
    border-bottom: 3px solid var(--color-primary);

    & > label {
      color: var(--color-primary);
    }
  }

  & > label {
    /* transform: translateY(-20px); */
    /* margin-left: 10px; */
    border-style: none;
    color: var(--color-grey300);
    /* padding: 0px 2px; */
    align-self: start;
    width: max-content;
    /* top: -10px; */

    position: absolute;
    left: 0;
  }

  /* & > div {
    display: flex;
    justify-content: space-between;
    width: 100%; */

  & > input {
    width: 100%;
    padding: 5px;
    border-style: none;
    outline-style: none;
    border-radius: 5px;
    border-style: none;
    /* transform: translateY(-60px); */
    /* background-color: red; */
    /* background-color: red; */

    ::placeholder {
      color: var(--color-grey50);
    }
    :valid,
    :focus {
      ::placeholder {
        color: var(--color-grey300);
      }
    }
    :valid ~ label,
    :focus ~ label {
      transform: translateY(-20px);
      font-size: 0.8rem;
      /* padding: 0 10px; */
      background-color: var(--color-white);
    }
  }

  & > button {
    background-color: transparent;
    border-style: none;
    color: var(--color-grey300);
    margin-right: 10px;
    z-index: 10;
    position: absolute;
    right: 0;
    /* top: 20px; */

    :hover {
      color: var(--color-primary);
    }
  }
  /* } */
`;
