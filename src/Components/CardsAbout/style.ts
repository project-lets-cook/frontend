import styled from "styled-components";



export const ListStyled = styled.ul`
    width: 100%;
    min-width: 320px;
    display: flex;
    gap: 20px;
    overflow: auto;

    & > li { 
    margin-top: 100px;
    margin-bottom: 10px;
    width: 200px;
    min-width: 200px;
    height: 250px;
    background-color: #DCEEF2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 10px;
    border: 5px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & > h4 {
        margin-top: 50px;
        text-align: center;
        color: black;
        font-size: 24px;
        font-weight: 700;
    }

    & > p {
        color: black;
        font-size: 20px;
        text-align: left;

        & > a {
            text-decoration: none;
            color: black;
        }
    }

    & > button {
        border-style: none;
        background-color: transparent;
        color: red;
        font-size: 20px;
        font-weight: 600;
    }}
`

export const ImgWrap = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    background-color: #DCEEF2;
    border-radius: 100%;
    top: -100px;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    & > img {
        object-fit: cover;
        width: 100%;
    }
`