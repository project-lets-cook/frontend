import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  > div {
    max-width: 1200px;
    margin: 0 auto;
  }

  & > header {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    & > img {
      margin-top: 50px;
    }

    & > a {
      font-size: 15px;
      color: black;
      font-weight: 600;
      position: absolute;
      top: 70px;
      right: 0;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
