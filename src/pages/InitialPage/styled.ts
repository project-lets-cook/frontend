import styled from "styled-components";

export const StyledInitialPage = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url("../../src/assets/img/banner.png");
  background-repeat: no-repeat;
  background-size: cover;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
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
    gap: 70px;
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
    margin-top: 30px;
    position: static;
  }

  .login-form .loading-icon {
    animation: loadingIcon 2s;
  }

  @keyframes loadingIcon {
    to {
      transform: rotate(2turn);
    }
  }

  @media screen and (max-width: 1280px) {
    > header, main {
      padding: 15px;
    }
  }

  @media screen and (max-width: 520px) {
    background: none;

    header {
      height: auto;
      margin: 20px 0 30px 0;

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
      height: 100%;
      gap: 30px;
      padding-bottom: 20px;

      button {
        width: 100%;
      }

      > div {
        width: 100%;

        border: 3px solid var(--color-secondary);
        padding: 15px 15px;
        border-radius: 5px;
        > p {
          font-size: 18px;
        }

        > div {
          width: 100%;
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
