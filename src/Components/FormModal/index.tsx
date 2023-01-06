import { LoginForm } from "../LoginForm"
import { BsArrowRight } from "react-icons/Bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledFormModal } from "./style";

interface iFormModal {
    name: string;
    children: JSX.Element;
}

export const FormModal = ({name, children}:iFormModal) => { 

    const { modalClose } = useContext(UserContext);

    return (
        <StyledFormModal>
            <div className="default-modal-header">
                <p>{name}</p>
                <button type="button" onClick={modalClose}>
                  <BsArrowRight size={31} />
                </button>
            </div>
            <div className="form-input-box">
                {children}
            </div>
        </StyledFormModal>
    )
}