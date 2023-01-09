import styled from "styled-components";
import header from "../../assets/img/header.webp";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 120px;
  background-image: url(${header});
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: cover;

  position: relative;

  > div {
    background-color: var(--color-grey40);
    background-color: var(--color-secondary);
    box-shadow: 2px 2px 10px #00000060;
    height: 100%;
  /*   position: relative; */
    /* width: 100%; */
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }


    > div {
      height: 100px;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      /* flex-direction: row; */
      justify-content: space-between;
      align-items: center;
      /* background-color: red; */

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;

        > img {
          width: 50px;
          height: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          border-radius: 50%;
        }

        > button {
          width: 30px;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: transparent;
          border-style: none;
          color: var(--color-grey300);
        }
      }
    }

.background button, svg {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
    }}
`