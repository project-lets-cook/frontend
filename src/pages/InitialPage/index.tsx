import { StyledInitialPage } from "./styled"
import { Modal } from "../../Components/Modal"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FormModal } from "../../Components/FormModal";
import { LoginForm } from "../../Components/LoginForm";
import { RegisterFormReceiver } from "../../Components/RegisterFormReceiver";
import { RegisterFormDonor } from "../../Components/RegisterFormDonor";

export const InitialPage = () => {

    const { openLogin, openRegisterReceiver, openRegisterDonor, modalLogin, modalRegisterReceiver, modalRegisterDonor } = useContext(UserContext);

    return (
        <StyledInitialPage>
            {
                openLogin && <Modal children={<FormModal name ={"Login"} children ={<LoginForm/>}/>}/>
            }
            {
                openRegisterReceiver && <Modal children={<FormModal name ={"Registro"} children ={<RegisterFormReceiver/>}/>}/>
            }
            {
                openRegisterDonor && <Modal children={<FormModal name ={"Registro"} children ={<RegisterFormDonor/>}/>}/>
            }
            
            <header>
                <div className="container">
                    <img src="../../src/assets/icons/logo.png" alt="logo" />
                    <button type="button" onClick={modalLogin}>Login</button>
                </div>
            </header>

            <div className="container">
    
                <div className="register-donor-box">
                    <p>Tenho um empreendimento e quero evitar o desperdício de comida</p>
                    <button type="button" onClick={modalRegisterDonor} className="button-register">Cadastre-se e doe</button>
                </div>

                <div className="register-receiver-box">
                    <p>Sou uma ONG precisando de doações</p>
                    <button type="button" onClick={modalRegisterReceiver} className="button-register">Receba doações agora</button>
                </div>
            </div>
        </StyledInitialPage>
    )
}