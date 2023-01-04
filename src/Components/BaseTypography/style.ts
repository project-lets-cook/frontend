import styled, { css } from "styled-components";
import { BaseTypography } from ".";

interface IStyledTypography {
  classText:"Heading" | "Heading1"| "Heading2" | "Heading3" | "Heading4" |  "Body" | "Body600" | "Caption" | "label"
}

export const StyledTypography = styled(BaseTypography)`
  margin: 0;
  ${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Heading":
        return css`
        font-size: 32px;
        font-weight: 600;
        text-align: left;
        `;
      case "Heading1":
        return css`
        font-size: 26px;
        font-weight: 700;
        text-align: center;
        `;
      case "Heading2":
        return css`
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        `;
      case "Heading3":
        return css`
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: left;
        `;
      case "Heading4":
        return css`
        font-size: 20px;
        font-weight: 600;
        text-align: left;
        `;
      case "Body":
        return css`
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        `;
      case "Body600":
        return css`
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        `;
      case "Caption":
        return css`
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        `;
    }
  }}
`;
