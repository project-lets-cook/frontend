import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/Bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iModalProps {
  children: JSX.Element;
  name: string;
}

export const Modal = ({ children, name }: iModalProps) => {
  const { openModal, modalClose } = useContext(UserContext);

  return openModal ? (
    <StyledModal>
      <div className="modal-box">
        <header className="default-modal-header">
          <p>{name}</p>
          <button type="button" onClick={modalClose}>
            <BsArrowRight size={31} />
          </button>
        </header>
        <div className="form-input-box">{children}</div>
      </div>
    </StyledModal>
  ) : (
    <></>
  );
};
