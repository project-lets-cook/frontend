import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iModalProps {
  children: JSX.Element;
  name: string;
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ children, name, state, setState }: iModalProps) => {

  return state ? (
    <StyledModal>
      <div className="modal-box">
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
