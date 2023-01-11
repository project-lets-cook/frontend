import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { Loader } from "../Loader";
import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { useOutClick } from "../Hooks/useOutClick";

interface iModalProps {
  children: JSX.Element;
  name: string;
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ children, name, state, setState }: iModalProps) => {

  const { modalLoading } = useContext(DonationContext)

  const modalRef = useOutClick(() => setState(false))

  return state ? (
    <StyledModal>
      <div className="modal-box" ref={modalRef}>
       {modalLoading && <div className="loader-box"><Loader /></div>}
        <header className="default-modal-header">
          <p>{name}</p>
          <button type="button" onClick={() => setState(!state)}>
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
