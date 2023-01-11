import styled from "styled-components";

export const StyledDashboard = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 40px;

  section:nth-child(2) {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 20px 0;

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

  .container {
    margin: 0 auto;
    width: 1200px;
    /* display: flex;
    justify-content: space-around; */
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
