import { StyledModal } from "./styles";
import { BsArrowRight } from "react-icons/Bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iModalProps {
  children: JSX.Element;
}

export const Modal = ({ children }: iModalProps) => {
  const { openModal } = useContext(UserContext);

  return openModal ? (
    <StyledModal>
      <div>
        {/* <header>
            <button type="button" onClick={modalClose}>
              <BsArrowRight size={31} />
            </button>
          </header> */}
        {children}
      </div>
    </StyledModal>
  ) : (
    <></>
  );
};
