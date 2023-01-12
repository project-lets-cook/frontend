import banner from "../../assets/img/banner.png";
import styled from "styled-components";

export const StyledInitialPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  header > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    height: 80vh;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 490px;

      > div {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      > p {
        font-weight: 600;
        font-size: 23px;
        text-align: center;
        margin-bottom: 20px;
        color: var(--color-grey900);
      }
    }
  }

  > footer {
    position: fixed;
  }

  @media screen and (max-width: 1280px) {
    > header,
    main {
      padding: 15px;
    }
  }

  @media screen and (max-width: 520px) {
    background: none;

    header {
      margin-top: 20px;

      > div {
        > img {
          width: 130px;
        }
        button {
          padding: 10px 20px;
        }
      }
    }
    main {
      width: 100%;
      height: auto;
      gap: 30px;
      padding-bottom: 30px;

      button {
        width: 100%;
      }

      > div {
        width: 100%;

        border: 3px solid var(--color-secondary);
        padding: 15px 15px;
        border-radius: 5px;
        > p {
          font-size: 16px;
        }

        > div {
          width: 100%;
          flex-direction: column-reverse;
        }
      }
    }
    Footer {
      position: static;
    }
  }
`;
