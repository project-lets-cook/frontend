import { StyledTypography } from '../BaseTypography/style'
import { StyledCard } from './styles'


export const Card = ({ element }) => {

  const {
    img,
    title,
    category,
    validation,
    descripition,
    amounts,
    address
  } = element

  return (
    <StyledCard>
      <img src={img} alt={title} type={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">{title}</StyledTypography>
        <StyledTypography classText="Body" tag="p">{category}</StyledTypography>
        <StyledTypography classText="Body" tag="p">{validation}</StyledTypography>
        <StyledTypography classText="Body" tag="p">Detalhes</StyledTypography>
      </div>
    </StyledCard>
  )
}
