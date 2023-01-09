import styled from "styled-components";

export const SelectCityStyled = styled.form`
    width: 250px;
    margin-bottom: 20px;
    position: absolute;
    top: -61px;
    right: 213px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > select {
    -webkit-appearance: none;
    background-color: var(--color-primary);
    color: var(--color-grey50);
    padding: 13px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    border-style: none;
    outline-style: none;
    border-radius: 2px;
    cursor: pointer;
    }
`