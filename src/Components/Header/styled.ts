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

      > img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }

      > button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-style: none;
        color: var(--color-grey300);
      }
    }

  }
  button, svg {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
  }

  @media screen and (max-width: 520px) {
    /* display: flex;
    flex-direction: column; */
    display: inline;
    background: none;
    box-shadow: none;

    > div {
      display: inline;
      flex-direction: column;

      > div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border: 1px solid blue;
        padding-right: 15px;
        gap: 10px;

        > img {
          border: 1px solid green;
          transform: scale(0.7);
        }
      }
    }
  }
`;
