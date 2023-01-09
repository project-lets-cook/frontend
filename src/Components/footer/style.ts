import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: black;
  height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;

  & > div {
    width: 95%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h2 {
      font-style: italic;
      color: white;
    }

    & > a {
      color: white;
      :hover {
        color: red;
      }
    }
  }
`;
