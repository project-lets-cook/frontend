import styled from "styled-components";

export const StyledDashboard = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* background-color: blue; */

  section:nth-child(2) {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    position: relative;
    /* background-color: red; */
    padding: 20px 0;
    /* margin-bottom: 40px; */

    > ul {
      width: 100%;
      padding: 5px 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      /* justify-content: center; */
      flex-wrap: wrap;
      gap: 20px;
      max-height: 500px;
      overflow-y: auto;
      /* position: relative; */
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

  .modal-loading-box > div, span{
    width: 1.5em;
    height: 1.5em;
  }
`;
