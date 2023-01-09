import { StyledHeader } from "./styled"
import { FiLogOut } from "react-icons/fi"
import logo from "../../assets/icons/logo.png"
import imgError from "../../assets/img/imgnotfound.jpg"
import { SheradItens } from "../SheradItens"
import { SyntheticEvent, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { SelectCity } from "../Forms/Select"


export const Header = () => {

    const { userLogout } = useContext(UserContext)

    const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
        (event.target as HTMLImageElement).src = `${imgError}`;
    }

    return (
        <StyledHeader>
            <div className="background">
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <img src="img" alt="name" onError={addDefaultImg} />
                        <button type="button" onClick={userLogout}>
                            <FiLogOut />
                        </button>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}