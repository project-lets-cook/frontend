import { useState } from "react";
import { Button } from "../../Components/Button";
import { LoginForm } from "../../Components/LoginForm";
import { Modal } from "../../Components/Modal";
import { StyledInitialPage } from "./styled";

export const InitialPage = () => {
  const [showModalLogin, setShowModalLogin] = useState(false)
  const [showModalRegister1, setShowModalRegister1] = useState(false)
  const [showModalRegister2, setShowModalRegister2] = useState(false)


  return (
    <StyledInitialPage>
      {showModalLogin && <Modal setShowModal={setShowModalLogin}><LoginForm /></Modal>}
      {showModalRegister1 && <Modal setShowModal={setShowModalRegister1}><p>REgister1</p></Modal>}
      {showModalRegister2 && <Modal setShowModal={setShowModalRegister2}><p>Register2</p></Modal>}
      <header>
        <div className="container">
          <img src="../../src/assets/icons/logo.png" alt="logo" />
          <Button size="lg" theme="primary" type="button" onclick={() => setShowModalLogin(true)}>
            Login
          </Button>
        </div>
      </header>
      <div className="container">
        <div className="register-donor-box">
          <p>Tenho um empreendimento e quero evitar o desperdício de comida</p>
          <button className="button-register" onClick={() => setShowModalRegister1(true)}>Cadastre-se e doe</button>
        </div>

        <div className="register-receiver-box">
          <p>Sou uma ONG precisando de doações</p>
          <button className="button-register" onClick={() => setShowModalRegister2(true)}>Receba doações agora</button>
        </div>
      </div>
    </StyledInitialPage>
  );
};
