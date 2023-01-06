import styled from "styled-components";


export const StyledCard = styled.li`
    background-color:var(--color-secondary) ;
    width: 23%;
    min-width: 200px;
    height: 270px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 3px;
    margin-top: 10%;
    box-shadow: -2px 0px 21px -3px rgba(0,0,0,0.45);
    border: 5px solid var(--color-grey50);
    div{
        width: 100%;
        height: 60%;
        margin-bottom: 10%;
        display: flex;
        flex-direction: column;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }

`