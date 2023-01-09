import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid var(--color-grey300);
  outline-style: none;
  position: relative;

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
    border-style: none;
    color: var(--color-grey300);
    align-self: start;
    width: max-content;
    position: absolute;
    left: 0;
  }

  & > input {
    width: 100%;
    margin-left: 10px;
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
      transform: translateY(-15px);
      font-size: 0.8rem;
      background-color: var(--color-grey50);
    }
  }
`;
