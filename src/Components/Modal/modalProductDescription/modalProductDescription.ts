import styled from "styled-components";

export const ModalProductDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  gap: 3rem;

  div#titleDescription {
    flex-direction: column;
    display: flex;
    align-self: center;
    gap: 1rem;
    img {
      height: 15rem;
      width: 15rem;
    }
    span {
      align-self: center;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  div#typeDescription {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    div {
      display: flex;
      gap: 0.3rem;
    }
    span#title {
      font-weight: 600;
      font-size: 1.125rem;
    }
  }
`;
