import styled from "styled-components";
import header from "../../assets/img/header.png"

export const StyledHeader = styled.header`
    width: 100%;
    height: 200px;
    background-image: url(${header});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .background{
        width: 100%;
        height: 100%;
        background-color: rgb(227,227,227,0.7);
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
      width: 20%;
      height: 60px;
      display: flex;
      flex-direction: row;
     justify-content: space-between;
      align-items: center;
    }
    .background > div > div > img {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
    }
    .background > div > div > svg  {
      width: 30%;
      height: 80%;
      display: flex;
      flex-direction: row;
     justify-content: space-between;
      align-items: center;
    }
`
