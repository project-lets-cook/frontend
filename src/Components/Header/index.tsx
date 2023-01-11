import { StyledHeader } from "./styled";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/icons/logo.png";
import imgError from "../../assets/img/imgnotfound.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
    const { userLogout, user, setModalProfile, addDefaultImg } = useContext(UserContext)

    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <div>
                    <button type="button" onClick={() => {setModalProfile(true)}}>
                        {user ? <img src={user.profileImgUrl} alt="profilepic" onError={addDefaultImg} /> :
                            <img src={imgError} alt='profilepic' />}
                    </button>

                    <button type="button" onClick={userLogout}>
                        <FiLogOut />
                    </button>
                </div>
            </div>
        </StyledHeader>
    )
}
