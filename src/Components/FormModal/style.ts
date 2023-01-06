import styled from "styled-components";

export const StyledFormModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100%;
  padding: 0 30px;

  form p {
    margin-top: 5px;
    font-size: 11px;
    color: var(--color-error);
    /* background-color: red; */
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
  ::-webkit-scrollbar-track {
    background-color: var(--color-grey100);
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
  }
`;
