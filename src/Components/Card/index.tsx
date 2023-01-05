import { StyledTypography } from '../BaseTypography/style'
import { ImageCards } from './Image'
import { StyledCard } from './styles'

interface IElement {
  userId: number,
  img: string,
  title: string,
  category: string;
  validation: string,
  descripition: string,
  amounts: string,
  address: string,
  id: number,
}
interface icard {
  element: IElement
}
export const Card = ({ element }: icard) => {

  const {
    title,
    category,
    validation,
  } = element

  return (
    <StyledCard>
      <ImageCards category={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">{title}</StyledTypography>
        <StyledTypography classText="Body" tag="p">{category}</StyledTypography>
        <StyledTypography classText="Body" tag="p">{validation}</StyledTypography>
        <StyledTypography classText="Body" tag="p">Detalhes</StyledTypography>
      </div>
    </StyledCard>
  )
}
