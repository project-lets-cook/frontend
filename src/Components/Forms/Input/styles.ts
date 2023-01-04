import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    background-color: white;
    border-bottom: 3px solid grey;
    outline-style: none;

    :focus-within {
        border-bottom: 3px solid red;
        outline-style: none;
        & > label {
            color: red;
        }
    }
    :hover {
        border-bottom: 3px solid red;

        & > label {
            color: red;
        }
    }

    & > label{
        margin-left: 10px;
        border-style: none;
        color: grey;
        padding: 0px 5px;
        background-color: white;
        align-self: start;
        width: max-content;
        top: -10px;
    }

    & > input{
        width: 100%;
        padding: 15px;
        border-style: none;
        outline-style: none;
        border-radius: 5px;
        border-style: none;
        ::placeholder {
            color: grey;
        }
    }


`