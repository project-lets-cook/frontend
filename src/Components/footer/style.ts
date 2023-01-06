import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    background-color: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
 

    & > div{
        width: 95%;
        max-width: 1100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    & > h2 {
        font-style: italic;
        color: white;
    }

    & > a{
        color: white;
    }
    }
`