import { StyledInitialPage } from "./styled";
import logo from "../../assets/icons/logo.png";
import { Modal } from "../../Components/Modal";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginForm } from "../../Components/LoginForm";
import { RegisterFormReceiver } from "../../Components/RegisterFormReceiver";
import { RegisterFormDonor } from "../../Components/RegisterFormDonor";
import { Button } from "../../Components/Button";
import { StepsCarousel } from "../../Components/StepsCarousel";
import { Navigate } from "react-router-dom";
import { Footer } from "../../Components/Foote";

export const InitialPage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegisterReceiver, setOpenRegisterReceiver] = useState(false);
  const [openRegisterDonor, setOpenRegisterDonor] = useState(false);

  const token = localStorage.getItem("TOKEN");

  return token === null ? (
    <>
      {openLogin && (
        <Modal
          children={<LoginForm />}
          name={"Login"}
          state={openLogin}
          setState={setOpenLogin}
        />
      )}
      {openRegisterDonor && (
        <Modal
          children={<RegisterFormDonor setState={setOpenRegisterDonor} />}
          name={"Registro Donatário"}
          state={openRegisterDonor}
          setState={setOpenRegisterDonor}
        />
      )}
      {openRegisterReceiver && (
        <Modal
          children={<RegisterFormReceiver setState={setOpenRegisterReceiver} />}
          name={"Registro Doador"}
          state={openRegisterReceiver}
          setState={setOpenRegisterReceiver}
        />
      )}

      <StyledInitialPage>
        <header>
          <div className="container">
            <img src={logo} alt="logo" />
            <Button
              size="md"
              theme="primary"
              type="button"
              onclick={() => setOpenLogin(true)}
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
                onclick={() => setOpenRegisterDonor(true)}
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
                onclick={() => setOpenRegisterReceiver(true)}
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
