import styled from "styled-components";

export const StyledImageCards = styled.figure`
  /* background-color: var(--color-grey50); */
  background-color: var(--color-secondary);
  /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5); */
  /* box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.45); */
  width: 110px;
  height: 110px;
  position: absolute;
  top: -50px;
  left: 25px;
  border-radius: 50%;
  border: 4px solid var(--color-secondary);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    transition: 0.3s ease-in;
    max-height: 100%;
  }
`;
