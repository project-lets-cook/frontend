import { Button } from "../../Components/Button";
import { LoginForm } from "../../Components/LoginForm";
import { StyledInitialPage } from "./styled";

export const InitialPage = () => {
  return (
    <StyledInitialPage>
      <header>
        <div className="container">
          <img src="../../src/assets/icons/logo.png" alt="logo" />
          <Button size="lg" theme="primary" type="button">
            Login
          </Button>
        </div>
      </header>
      <LoginForm />
      <div className="container">
        <div className="register-donor-box">
          <p>Tenho um empreendimento e quero evitar o desperdício de comida</p>
          <button className="button-register">Cadastre-se e doe</button>
        </div>

        <div className="register-receiver-box">
          <p>Sou uma ONG precisando de doações</p>
          <button className="button-register">Receba doações agora</button>
        </div>
      </div>
    </StyledInitialPage>
  );
};
