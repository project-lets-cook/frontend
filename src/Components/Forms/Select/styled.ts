import styled from "styled-components";

export const SelectCityStyled = styled.form`
    width: 200px;
    margin-bottom: 20px;
    position: absolute;
    top: -58px;
    right: 337px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    background-color: var(--color-secondary);

    > select {
    -webkit-appearance: none;
    color: var(--color-grey300);
    background-color: transparent;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border-style: none;
    outline-style: none;
    border-radius: 2px;
    cursor: pointer;

    & > option {
        color: var(--color-grey900);
    }

    & > option:checked {
        color: var(--color-primary);
        font-weight: 800;
    }
    }
`