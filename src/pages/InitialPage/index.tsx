import { StyledInitialPage } from "./styled";
import { Modal } from "../../Components/Modal";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginForm } from "../../Components/LoginForm";
import { RegisterFormReceiver } from "../../Components/RegisterFormReceiver";
import { RegisterFormDonor } from "../../Components/RegisterFormDonor";
import { Button } from "../../Components/Button";
import { StepsCarousel } from "../../Components/StepsCarousel";
import { Navigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";

export const InitialPage = () => {
  const {
    openLogin,
    openRegisterReceiver,
    openRegisterDonor,
    modalLogin,
    modalRegisterReceiver,
    modalRegisterDonor,
    user,
  } = useContext(UserContext);

  const token = localStorage.getItem("TOKEN");

  return token === null ? (
    <>
      {openLogin && <Modal children={<LoginForm />} name={"Login"} />}
      {openRegisterReceiver && (
        <Modal children={<RegisterFormReceiver />} name={"Registro Donatário"} />
      )}
      {openRegisterDonor && (
        <Modal children={<RegisterFormDonor />} name={"Registro Doador"} />
      )}

      <StyledInitialPage>
        <header>
          <div className="container">
            <img src="../../src/assets/icons/logo.png" alt="logo" />
            <Button
              size="md"
              theme="primary"
              type="button"
              onclick={modalLogin}
            >
              Login
            </Button>
          </div>
        </header>

        <main className="container">
          <div className="register-donor-box">
            <p>
              Tenho um empreendimento, quero ajudar o próximo e evitar o
              descarte de alimentos
            </p>
            <div>
              <Button
                size="md"
                theme="white"
                type="button"
                onclick={modalRegisterDonor}
              >
                Cadastre-se e doe
              </Button>
              <StepsCarousel mode={"donor"} />
            </div>
          </div>

          <div className="register-receiver-box">
            <p>Sou uma ONG precisando de doações, ajudamos à quem tem fome</p>
            <div>
              <Button
                size="md"
                theme="white"
                type="button"
                onclick={modalRegisterReceiver}
              >
                Receba doações
              </Button>
              <StepsCarousel mode={"receiver"} />
            </div>
          </div>
        </main>
        <Footer />
      </StyledInitialPage>
    </>
  ) : (
    <Navigate to="/DashboardReceiver" />
  );
};
