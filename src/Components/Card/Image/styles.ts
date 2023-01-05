import styled from "styled-components";

export const StyledImageCards = styled.figure`
    background-color: var(--color-grey50);
    width: 40%;
    height:40%;
    position: absolute;
    top: -20%;
    left: +30%;
    border-radius: 50%;
    border: 3px solid var(--color-grey50);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px -4px 5px 0px rgba(0,0,0,0.07);
     img {
    transition: ease-in  0.5s;
    max-height: 90%;
    }
    :hover > img {
        transition: ease-out 0.5s;
        max-height: 130%;
    }

`