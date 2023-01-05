import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/Bs";
import { useState } from "react";

interface iModalProps {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, setShowModal }: iModalProps) => {

  return (
    <StyledModal>
      <div>
        <header>
          <button onClick={() => setShowModal(false)}>
            <BsArrowRight size={31} />
          </button>
        </header>
        {children}
      </div>
    </StyledModal>
  ) 
};
