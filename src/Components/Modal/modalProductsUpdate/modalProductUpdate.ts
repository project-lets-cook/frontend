import styled from "styled-components";

export const DonationUpdateStyled = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    span#titleDescription {
      font-weight: 600;
      font-size: 1.125rem;
    }
    span {
      font-size: 1rem;
    }
  }

  form {
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
