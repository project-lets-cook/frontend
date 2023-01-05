import styled from "styled-components";

export const StyledInitialPage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("../../src/assets/img/banner.png");
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        margin-bottom: 50px;
    }

    header > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    header > div > button {
        width: 160px;
        height: 50px;
        background-color: var(--color-primary);
        color: var(--color-grey100);
        border: none;
        font-size: 16px;
        font-weight: 500;
    }

    header > div > button:hover {
        transition-duration: 0.3s;
        background-color: var(--color-menu-effect);
    }

    .button-register {
        background-color: transparent;
        border: 2px solid var(--color-grey900);
        border-radius: 10px;
        color: var(--color-grey900);
        font-size: 16px;
        font-weight: 500;
        width: 180px;
        height: 50px;
    }

    .button-register:hover {
        transition-duration: 0.3s;
        background-color: var(--color-grey40);
    }

    .register-donor-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 490px;
        margin-bottom: 80px;
    }

    .register-donor-box > p {
        font-weight: 700;
        font-size: 26px;
        text-align: center;
        margin-bottom: 20px;
        color: var(--color-grey900);
    }

    .register-receiver-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 490px;
    }

    .register-receiver-box > p {
        font-weight: 600;
        font-size: 26px;
        text-align: center;
        margin-bottom: 20px;
        color: var(--color-grey900);
    }
`