import styled from "styled-components";

export const ModalProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  span#nome {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    margin-bottom: 1rem;
    align-self: center;
    width: 15rem;
    height: 15rem;
  }
  form {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  button:first-child {
    margin-top: 1.5rem;
  }
`;
