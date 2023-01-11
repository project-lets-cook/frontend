import { StyledHeader } from "./styled"
import { FiLogOut } from "react-icons/fi"
import logo from "../../assets/icons/logo.png"
import imgError from "../../assets/img/imgnotfound.jpg"
import { SyntheticEvent, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"



export const Header = () => {

    const { userLogout, user } = useContext(UserContext)

    const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
        (event.target as HTMLImageElement).src = `${imgError}`;
    }

    return (
        <StyledHeader>
            <div className="background">
                <div>
                    <img src={logo} alt="" />
                    <div>
                        {user? <img src={user.profileImgUrl} alt="profilepic" onError={addDefaultImg} />:
                          <img src={imgError} alt='profilepic' />}
                        
                        <button type="button" onClick={userLogout}>
                            <FiLogOut />
                        </button>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}