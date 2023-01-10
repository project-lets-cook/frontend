import styled from "styled-components";

export const StyledCard = styled.li`
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
  
  figure {
      background-color: var(--color-secondary);
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
  }
  :hover img {
    max-height: 130%;
  }

  p {
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
