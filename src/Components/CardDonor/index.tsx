import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button';
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
export const CardDonor = ({ element }: icard) => {

  const {
    title,
    category,
    address,
  } = element

  return (
    <StyledCard>
      <ImageCards category={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">{title}</StyledTypography>
        <StyledTypography classText="Body" tag="p">{category}</StyledTypography>
        <StyledTypography classText="Caption" tag="p">{address}</StyledTypography>
        <Button size={'md'} theme={'transparent'} type={'button'} onclick={() => console.log("to funcionando")}>Detalhes</Button>
      </div>
    </StyledCard>
  )
}
