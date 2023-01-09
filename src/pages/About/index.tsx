import { StyledAbout } from "./styled";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/footer";
import { AboutCarousel } from "../../Components/AboutCarousel";

export const About = () => {
  return (
    <>
      <StyledAbout>
        <header className="container">
          <Link to="/">Voltar para Home</Link>
          <img src={logo} alt="" />
        </header>
        <AboutCarousel />
        <Footer />
      </StyledAbout>
    </>
  );
};
