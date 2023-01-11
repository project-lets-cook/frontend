import styled from "styled-components";

export const StyledCardReceiver = styled.li`
  width: 130px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-top: 5%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.45);
  border: 4px solid var(--color-secondary);
  
  
  .containerli{
    width: 90%;
    height: 80%;
  }
  img {
      background-color: var(--color-secondary);
      width: 90px;
      height: 90px;
      top: -50px;
      left: 25px;
      border: 4px solid var(--color-secondary);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease-in;
  }
  
  :hover img {
    max-height: 130%;
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
