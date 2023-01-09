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
    width: 80%;
    max-width: 450px;
    height: 100vh;
    background-color: var(--color-grey50);
  }

  .default-modal-header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-top: 50px;
    margin-bottom: 50px;
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
    gap: 30px;
    margin-bottom: 30px;
  }

  .form-input-box > form .input-warning {
    margin-top: 5px;
    color: var(--color-primary);
  }

  form p {
    text-align: right;
    margin-top: 5px;
    font-size: 11px;
    color: var(--color-error);
  }

  .modal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    height: 100%;
    padding: 0 30px;
  }
`;
