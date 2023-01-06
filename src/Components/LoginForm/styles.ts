import styled from "styled-components";
export const StyledLoginForm = styled.div`
  padding-top: 14%;

  h3 {
    margin: 0 57px;
  }

  form {
    margin: 45px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 30px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > button {
      margin: 0 auto;
    }
  }
`;
