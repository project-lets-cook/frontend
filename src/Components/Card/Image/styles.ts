import styled from "styled-components";

export const StyledImageCards = styled.figure`
    background-color: var(--color-grey50);
    width: 60%;
    height:40%;
    position: absolute;
    top: -23%;
    left: +25%;
    border-radius: 50%;
    border: 3px solid var(--color-grey50);
    display: flex;
    justify-content: center;
    align-items: center;
     img {
    transition: ease-in  0.5s;
    max-height: 90%;
    }
    :hover > img {
        transition: ease-out 0.5s;
        max-height: 130%;
    }

`