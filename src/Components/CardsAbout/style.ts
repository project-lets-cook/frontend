import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 100%;
  /* height: 400px; */
  min-width: 320px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  overflow: auto;

  /* .up {
    transform: translateY(-50px);
  }

  .down {
    transform: translateY(50px);
  } */

  & > li {
    margin: 100px 0 20px 0;
    padding: 0 5px;
    width: 200px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    gap: 20px;
    border: 5px solid white;
    background-color: var(--color-grey50);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & > h4 {
      margin-top: 60px;
      text-align: center;
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
    & hr {
      width: 100%;
    }

    & > div:last-child {
      padding: 0 3px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      & > span > a {
        font-size: 13px;
        text-decoration: none;
        color: black;
      }
    }
  }
`;

export const ImgWrap = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  background-color: var(--color-secondary);
  border-radius: 100%;
  top: -100px;
  border: 5px solid var(--color-grey50);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & > img {
    object-fit: cover;
    width: 100%;
  }
`;
