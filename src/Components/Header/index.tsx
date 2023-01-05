import { StyledHeader } from "./styled"
import { FiLogOut } from "react-icons/fi"
import logo from "../../assets/icons/logo.png"
import { SheradItens } from "../SheradItens"

export const Header = () => {
    return (
        <StyledHeader>
            <div className="background">
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <img src="img" alt="name" />
                        <FiLogOut />
                    </div>
                </div>
            <SheradItens />
            </div>
        </StyledHeader>
    )
}