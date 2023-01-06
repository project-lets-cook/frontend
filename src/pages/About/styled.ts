import styled from "styled-components";

export const StyledAbout = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > div {
    width: 95%;
    /* min-height: 300px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    & > img {
      margin-top: 50px;
      /* width: 300px; */
    }

    & > a {
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
