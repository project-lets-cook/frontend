import styled from "styled-components";
export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-opacity);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  > div {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    max-width: 400px;
    height: 100vh;
    background-color: var(--color-grey50);
  }
  .modal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    height: 100%;
    padding: 0px 20px;
  }
  .modal-box > div {
    width: 100%;
    height: 100%;
  }
  .loader-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    position: absolute;
    z-index: 10;
  }
  .content-modal-box {
    padding: 0 30px;
  }
  .default-modal-header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: auto;
    padding: 0;
    margin: 45px 0;
  }
  .default-modal-header > p {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-grey900);
  }
  .default-modal-header > button {
    background-color: transparent;
    border: none;
  }
  .form-input-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .form-input-box > form {
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 25px;
  }
  .form-input-box > form .input-warning {
    margin-top: 5px;
    color: var(--color-primary);
  }
  form p {
    height: 15px;
    text-align: right;
    margin-top: 2px;
    font-size: 11px;
    color: var(--color-error);
  }
  @media screen and (max-width: 520px) {
    .modal-box {
      padding: 0 15px;
    }
  }
`;