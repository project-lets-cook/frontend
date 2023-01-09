import styled from "styled-components";

export const StyledDashboardDonor = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* background-color: blue; */

  section:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    /* background-color: red; */
    padding: 20px 0;
    margin-bottom: 50px;

    > ul {
      /* width: 60%; */
      padding: 5px 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      max-height: 630px;
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
`;
