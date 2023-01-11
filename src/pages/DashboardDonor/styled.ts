import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 40px;

  main {
    section:nth-child(1) {
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: 30px 0;

      > ul {
        width: 100%;
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        max-height: 500px;
        overflow-y: auto;
      }
    }
  }

  .container {
    margin: 0 auto;
    width: 1200px;
    /* display: flex;
    justify-content: space-around; */
  }

  .modal-loading-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-opacity);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .modal-loading-box > div {
    width: 1.5em;
    height: 1.5em;
  }

  .waring-my-donations {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .waring-my-donations > p {
    font-size: 25px;
  }
`;
