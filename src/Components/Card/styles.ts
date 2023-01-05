import styled, { css } from "styled-components";

interface category{
    type:{}
}

export const StyledCard = styled.li`
    width: 26%;
    height: 270px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 3px;
    margin-top: 10%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img{
        width: 49%;
        height:50%;
        position: absolute;
        top: -23%;
        left: +25%;
        border-radius: 50%;
        border: 3px solid var(--color-grey50);
        ${(type) => {
        switch (type) {
            case "Cereais":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Hortaliças":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `;
            case "Frutas":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Legumes":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Carnes":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Leite":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Óleos":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "Açúcares":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            case "CestaBasica":
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `; 
            default:
                return css`
                background-image:url();
                background-position:center;
                background-repeat:no-repeat;
                background-size:cover;
                `;
        }
    }}
    }
    div{
        width: 100%;
        height: 60%;
        margin-bottom: 10%;
        display: flex;
        flex-direction: column;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`