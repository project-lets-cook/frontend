import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/Bs";
import { useState } from "react";

interface iModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: iModalProps) => {
  const [openModal, setOpenModal] = useState(true);

  return openModal ? (
    <StyledModal>
      <div>
        <header>
          <button onClick={() => setOpenModal(false)}>
            <BsArrowRight size={31} />
          </button>
        </header>
        {children}
      </div>
    </StyledModal>
  ) : (
    <></>
  );
};
