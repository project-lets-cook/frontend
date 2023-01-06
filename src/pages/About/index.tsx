import { StyledAbout } from "./styled";
import logo from "../../assets/icons/logo.png";
import { CardsAbout } from "../../Components/CardsAbout";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/footer";

export const About = () => {
  return (
    <StyledAbout>
      <div className="container">
        <Link to="/">Voltar para Home</Link>
        <img src={logo} alt="" />
        <CardsAbout />
      </div>
      <Footer />
    </StyledAbout>
  );
};
