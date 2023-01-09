import { StyledHeader } from "./styled";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/icons/logo.png";
import imgError from "../../assets/img/imgnotfound.jpg";
import { SheradItens } from "../SheradItens";
import { SyntheticEvent } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = `${imgError}`;
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");
    setUser(null);
    navigate("/");
  };

  return (
    <StyledHeader>
      <div className="background">
        <div>
          <img src={logo} alt="" />
          <div>
            <img src="img" alt="name" onError={addDefaultImg} />
            <button onClick={() => logout()}>
              <FiLogOut />
            </button>
          </div>
        </div>
        <SheradItens />
      </div>
    </StyledHeader>
  );
};
