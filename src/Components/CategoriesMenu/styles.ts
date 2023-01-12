import styled from "styled-components";

export const StyledCategoriesMenu = styled.aside`
  padding: 20px 50px;

  nav {
    width: 250px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: var(--color-grey50);
    border-radius: 1px;

    box-shadow: -2px 2px 2px 3px var(--color-secondary);
    position: relative;

    > button {
      border: none;
      font-size: 15px;
      width: 250px;
      height: 40px;
      background-color: var(--color-grey50);
    }
  }

  @media screen and (max-width: 520px) {
    display: none;
  }
`;
