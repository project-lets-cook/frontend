import styled from "styled-components";


export const SelectCityStyled = styled.div`
  width: auto;

  > select {
    letter-spacing: 1px;
    max-width: 250px;
    -webkit-appearance: none;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-grey300);
    color: var(--color-grey900);
    padding: 7px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    outline-style: none;
    border-radius: 2px;
    cursor: pointer;
    opacity: 0.8;

    & > option {
      color: var(--color-grey900);
    }

    & > option:checked {
      color: var(--color-primary);
    }
  }
`;
