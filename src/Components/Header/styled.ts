import { Button } from "./../Button/index";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 120px;
  background-color: var(--color-secondary);
  box-shadow: 2px 2px 10px #00000060;

  > div {
    height: 100px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 40px;

      > button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-style: none;
        color: var(--color-grey300);
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          border: 3px solid var(--color-grey50);

          :hover {
            border: 3px solid var(--color-primary);
          }
        }
      }
    }
  }

  button,
  svg {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
  }

  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media screen and (max-width: 520px) {
    > div {
      margin-top: 20px;
      align-items: flex-start;
      padding-left: 10px;

      > img {
        width: 140px;
      }

      > div {
        display: flex;
        padding: 5px 15px 0 0;
        gap: 30px;

        > button {
          > img {
            transform: scale(0.7);
          }
        }
      }
    }
  }
`;
