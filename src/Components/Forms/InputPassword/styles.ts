import styled from "styled-components";

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid var(--color-grey300);
  outline-style: none;
  position: relative;

  :focus-within {
    border-bottom: 2px solid var(--color-primary);
    outline-style: none;
    & > label {
      color: var(--color-primary);
    }
  }
  :hover {
    border-bottom: 2px solid var(--color-primary);

    & > label {
      color: var(--color-primary);
    }
  }

  & > label {
    font-size: 15px;
    border-style: none;
    color: var(--color-grey300);
    align-self: start;
    width: max-content;
    position: absolute;
    left: 0;
  }

  & > input {
    width: 100%;
    padding: 5px;
    border-style: none;
    outline-style: none;
    border-radius: 5px;
    border-style: none;

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
      font-weight: 700;
      transform: translateY(-20px);
      font-size: 0.8rem;
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
