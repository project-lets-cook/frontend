import { StyledAbout } from "./styled";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { AboutCarousel } from "../../Components/AboutCarousel";
import { StyledTypography } from "../../Components/BaseTypography/style";

export const About = () => {
  return (
    <>
      <StyledAbout>
        <header className="container">
          <Link to="/">Voltar para Home</Link>
          <img src={logo} alt="" />
        </header>
        <StyledTypography classText="Heading2" tag="h3">
          Integrantes da Equipe:
        </StyledTypography>
        <AboutCarousel />
      </StyledAbout>
    </>
  );
};
