import styled from "styled-components";
export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-opacity);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  > div {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 450px;
    height: 100vh;
    background-color: var(--color-grey50);
  }
`;
