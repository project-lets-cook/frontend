import styled from "styled-components";

export const StyledCategoriesMenu = styled.aside`
  padding: 20px;
  nav {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    padding: 20px 0;
    position: relative;
    width: 300px;
    border-radius: 20px 0 20px 0;
    background-color: var(--color-grey50);
    box-shadow: 0 5px 50px var(--color-shadow);

    > button {
      padding-left: 15px;
      border: none;
      font-size: 20px;
      width: 280px;
      height: 40px;
      background-color: var(--color-grey50);

      :hover {
        transform: translateX(-15px);
        border: none;
        width: 300px;
        height: 40px;
        border-radius: 30px;
        border-bottom-left-radius: 0;
        color: var(--color-grey50);
        background-color: var(--color-primary);
        box-shadow: 1px 1px 5px var(--color-grey900);

        ::before {
          transform: translateY(31.5px);
          content: "";
          position: absolute;
          left: 0;
          width: 15px;
          height: 20px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          background-color: var(--color-menu-effect);
          z-index: 2;
        }

        ::after {
          transform: translateY(31px);
          content: "";
          position: absolute;
          left: 0;
          width: 15px;
          height: 12px;
          background-color: var(--color-primary);
          z-index: 1;
        }
      }
    }
  }
`;
