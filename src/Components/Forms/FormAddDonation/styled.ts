import styled from "styled-components";

export const DivAddDonation = styled.div`
    width: 100%;
`

export const FomrAddDonation = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`

export const InputLocations = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    outline-style: none;
    gap: 5px;

    & > select {
        border-style: none;
        border-bottom: 2px solid var(--color-grey300);
        color: var(--color-grey300);

        :hover , :focus {
            color: var(--color-primary);
            border-bottom: 2px solid var(--color-primary);
        }
        & > option {
              color: var(--color-grey300);
        }
    }
`

export const SelectCategory = styled.select`
        border-style: none;
        border-bottom: 2px solid var(--color-grey300);
        color: var(--color-grey300);
        padding: 0px 0px 5px 0px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;

        :hover , :focus {
            color: var(--color-primary);
            border-bottom: 2px solid var(--color-primary);
        }
        & > option {
              color: var(--color-grey300);
        }
`