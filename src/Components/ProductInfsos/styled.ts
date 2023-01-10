import styled from "styled-components";

export const ProductInfosStyled = styled.div`

    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > img {
        width: 100%;
        height: 150px;

        overflow: hidden;
        align-self: center;
        background-color: var(--color-grey100);
        border-radius: 5px;
    }

    & > h2 {
        color: var(--color-grey900);
        text-align: center;
    }

    & > h6 {
        color: var(--color-grey300);
    }

    & > p {
        color: var(--color-grey900);
    }
    

`