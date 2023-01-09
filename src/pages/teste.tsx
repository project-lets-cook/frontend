import { useContext } from "react";
import { FormModal } from "../Components/FormModal";
import { Modal } from "../Components/Modal";
import { ModalProductDescription } from "../Components/Modal/modalProductDescription";
import { ModalProfileReceptor } from "../Components/Modal/modalProfile";
import { UserContext, UserProvider } from "../contexts/UserContext";

export const Teste = () => {
  const { modalOpen } = useContext(UserContext);
  modalOpen();
  return (
    <>
      <Modal>
        <FormModal>
          <ModalProductDescription id="1" />
        </FormModal>
      </Modal>
    </>
  );
};
