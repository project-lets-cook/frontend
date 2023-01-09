import styled from "styled-components";

export const StyledCard = styled.li`
  /* background-color: var(--color-secondary); */
  width: 170px;
  height: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 3px;
  margin-top: 5%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.45);
  border: 4px solid var(--color-secondary);
  /* background-color: red; */
  /* :hover {
    background-color: var(--color-secondary);
  } */

  :hover img {
    max-height: 130%;
  }

  p {
    /* background-color: red; */
    color: var(--color-grey300);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    hr {
      width: 100%;
    }
  }
`;
