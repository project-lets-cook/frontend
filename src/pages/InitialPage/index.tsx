import { StyledInitialPage } from "./styled";
import { Modal } from "../../Components/Modal";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FormModal } from "../../Components/FormModal";
import { LoginForm } from "../../Components/LoginForm";
import { RegisterFormReceiver } from "../../Components/RegisterFormReceiver";
import { RegisterFormDonor } from "../../Components/RegisterFormDonor";
import { Button } from "../../Components/Button";
import { StepsCarousel } from "../../Components/StepsCarousel";

export const InitialPage = () => {
  const {
    openLogin,
    openRegisterReceiver,
    openRegisterDonor,
    modalLogin,
    modalRegisterReceiver,
    modalRegisterDonor,
  } = useContext(UserContext);

  return (
    <StyledInitialPage>
      {openLogin && (
        <Modal
          children={<FormModal name={"Login"} children={<LoginForm />} />}
        />
      )}
      {openRegisterReceiver && (
        <Modal
          children={
            <FormModal
              name={"Registro Donatário"}
              children={<RegisterFormReceiver />}
            />
          }
        />
      )}
      {openRegisterDonor && (
        <Modal
          children={
            <FormModal
              name={"Registro Doador"}
              children={<RegisterFormDonor />}
            />
          }
        />
      )}

      <header>
        <div className="container">
          <img src="../../src/assets/icons/logo.png" alt="logo" />
          <Button size="md" theme="primary" type="button" onclick={modalLogin}>
            Login
          </Button>
        </div>
      </header>

      <main className="container">
        <div className="register-donor-box">
          <p>Tenho um empreendimento e quero evitar o desperdício de comida</p>
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
          <p>Sou uma ONG precisando de doações</p>
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
    </StyledInitialPage>
  );
};
