import { StyledTypography } from "../BaseTypography/style"
import { StyledCardInformation } from "./styles"

interface ICardInformation {
  img: string;
  value: string;
  text: string;
}
export const CardInformation = ({ img, value, text }: ICardInformation) => {

  return (
    <StyledCardInformation>
      <div>
        <img src={img} alt={text} />
        <StyledTypography classText="special" tag="h2">{value}</StyledTypography>
      </div>
      <StyledTypography classText="Caption" tag="p">{text}</StyledTypography>
    </StyledCardInformation>
  )
}
