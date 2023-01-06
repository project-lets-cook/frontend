import styled from "styled-components";
import header from "../../assets/img/header.png"

export const StyledHeader = styled.header`
    width: 100%;
    height: 150px;
    background-image: url(${header});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .background{
        width: 100%;
        height: 100%;
        background-color: var(--color-grey40);
    }
    .background > div{
        width: 90%;
        height: 100px;
        margin: 0 auto;
        padding-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
    .background > div > div{
      width: 14%;
      height: 60px;
      display: flex;
      flex-direction: row;
     justify-content: space-between;
      align-items: center;
    }
    .background > div > div > img {
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
    }
    .background > div > div > svg  {
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: row;
     justify-content: space-between;
      align-items: center;
    }
`
