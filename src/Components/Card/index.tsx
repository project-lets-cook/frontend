import { StyledTypography } from '../BaseTypography/style'
import { ImageCards } from './Image'
import { StyledCard } from './styles'


export const Card = ({ element }) => {

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
