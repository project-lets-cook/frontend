import pas from "../../assets/icons/pas.png"
import styled from "styled-components";

export const StyledCardInformation = styled.div`
    width: 25%;
    height: 169px;
    flex-direction: column;
    background-image: url(${pas});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    div{
        width:50%;
        height: 70%;
        display: flex;  
        align-items: flex-end;
        justify-content: flex-start;
    }
    h2{
        color:var(--color-grey60) ;
    }
    img{
        height: 100%;
    }
    p{
        text-align: center;
        width:50%;
        overflow-wrap: break-word;
    }

`