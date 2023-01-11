import styled from "styled-components";

export const ProductInfosStyled = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > figure img {
        width: 100%;
        height: 150px;

        overflow: hidden;
        align-self: center;
        background-color: var(--color-grey100);
        border-radius: 5px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            text-align: center;

        }
    }

`