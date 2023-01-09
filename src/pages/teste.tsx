import { useContext } from "react";
import { Modal } from "../Components/Modal";
import { ModalProfileReceptor } from "../Components/Modal/modalProfile";
import { UserContext, UserProvider } from "../contexts/UserContext";

export const Teste = () => {
  const { modalOpen } = useContext(UserContext);
  modalOpen();
  return (
    <>
      <Modal>
        <ModalProfileReceptor />
      </Modal>
    </>
  );
};
