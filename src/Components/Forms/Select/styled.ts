import styled from "styled-components";

export const SelectCityStyled = styled.form`
    width: 250px;
    margin-bottom: 20px;
    position: absolute;
    top: -52px;
    right: 260px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > select {
    -webkit-appearance: none;
    width: 200px;
    background-color: transparent;
    color: var(--color-grey300);
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    border-style: none;
    outline-style: none;
    }
`