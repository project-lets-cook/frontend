import styled from "styled-components";

export const StyledInitialPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("../../src/assets/img/banner.png");
  background-repeat: no-repeat;
  background-size: cover;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    /* svg {
      font-size: 35px;
    } */
  }

  header > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;
    height: 80vh;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 490px;

      > div {
        /* background-color: red; */
        display: flex;
        gap: 20px;
        align-items: center;
      }

      > p {
        font-weight: 600;
        font-size: 23px;
        text-align: center;
        margin-bottom: 20px;
        color: var(--color-grey900);
      }
    }
  }
`;
