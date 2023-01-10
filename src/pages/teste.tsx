import { useContext } from "react";
import { Modal } from "../Components/Modal";
import { ModalProductDescription } from "../Components/Modal/modalProductDescription";
import { ModalProductUpdate } from "../Components/Modal/modalProductsUpdate";
import { ModalProfileReceptor } from "../Components/Modal/modalProfile";
import { UserContext, UserProvider } from "../contexts/UserContext";

export const Teste = () => {
  const { modalOpen } = useContext(UserContext);
  modalOpen();
  return (
    <>
      <ModalProductUpdate />
    </>
  );
};
