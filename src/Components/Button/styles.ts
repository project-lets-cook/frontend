import styled, { css } from "styled-components";
interface iButtonStyledProps {
    size: 'lg' | 'md' | 'sm'
    theme: 'primary' | 'grey'
}
export const ButtonStyled = styled.button<iButtonStyledProps>`
    font-weight: 600;
    
    ${({ size }) => {
        switch (size) {
            case 'lg':
                return css`
                padding: 20px;
                width: 95%;
                font-size: 16px;
                `
            case 'md':
                return css`
                padding: 10px 20px;
                font-size: 16px;
                `
            case 'md':
                return css`
                padding: 10px 20px;
                font-size: 12px;
                `    
        }
    }}

    ${({ theme }) => {
        switch (theme) {
            case 'primary':
                return css`
                background-color: red;
                border: 1px solid red;
                color: grey;
                :hover{
                background-color: greenyellow;
                border: 1px solid greenyellow;
                }
                `
            case 'grey':
                return css`
                background-color: black;
                border: 1px solid black;
                color: blue;
                :hover{
                background-color: blue;
                border: 1px solid blue;
                color: black;
                }
                `
            case 'white':
                return css`
                background-color: grey;
                border: 1px solid grey;
                color: var(--color-grey2);
                :hover{
                background-color: red;
                border: 1px solid red;
                color: grey;
                }
                `
        }
    }}
        

`