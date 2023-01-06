import styled from "styled-components";

export const StyledImageCards = styled.figure`
    background-color: var(--color-secondary);
    width:150px;
    height:150px;
    position: absolute;
    top: -25%;
    left: 20px;
    border-radius: 50%;
    border: 5px solid var(--color-grey50);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    transition: ease-in  0.5s;
    max-height: 90%;
}
:hover > img {
    transition: ease-out 0.5s;
    max-height: 100%;
    overflow: hidden;
    }

`