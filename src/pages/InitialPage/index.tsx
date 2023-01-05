import { StyledInitialPage } from "./styled"

export const InitialPage = () => {
    return (
        <StyledInitialPage>
            <header>
                <div className="container">
                    <img src="../../src/assets/icons/logo.png" alt="logo" />
                    <button>Login</button>
                </div>
            </header>

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
    )
}