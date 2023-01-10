import styled, { css } from "styled-components";
interface iButtonStyledProps {
  size: "lg" | "md" | "sm";
  theme: "primary" | "transparent" | "white";
}
export const ButtonStyled = styled.button<iButtonStyledProps>`
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case "lg":
        return css`
          height: 50px;
          padding: 15px;
          width: 100%;
          font-size: 16px;
        `;
      case "md":
        return css`
          padding: 15px 50px;
          font-size: 16px;
        `;
      case "sm":
        return css`
          padding: 10px 20px;
          font-size: 12px;
        `;
    }
  }}

  ${({ theme }) => {
    switch (theme) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-grey50);
          border-style: none;
          :hover {
            opacity: 0.7;
          }
        `;
      case "white":
        return css`
          background-color: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          :hover {
            background-color: var(--color-primary);
            color: var(--color-grey50);
          }
        `;
      case "transparent":
        return css`
          font-weight: 700;
          background-color: transparent;
          color: var(--color-primary);
          border-style: none;
          :hover {
            opacity: 0.7;
          }
        `;
    }
  }}

@media screen and (max-width: 520px) {
    ${({ size }) => {
      switch (size) {
        case "lg":
          return css`
            padding: 10px;
            width: 100%;
            font-size: 16px;
          `;
        /*         case "md":
          return css`
            padding: 15px 50px;
            font-size: 16px;
          `;
        case "sm":
          return css`
            padding: 10px 20px;
            font-size: 12px;
          `; */
      }
    }}
  }
`;
