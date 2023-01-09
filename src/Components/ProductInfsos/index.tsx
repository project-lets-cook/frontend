import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button'
import { ProductInfosStyled } from './styled'
import  Cereals  from "../../assets/img/Cereals.jpeg"

export const ProductInfos = () => {
  return (
    <ProductInfosStyled>
        <img src={Cereals} alt="" />
        <StyledTypography classText="Heading3" tag="h2">title</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Cidade/Estado</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Categoria</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Qauntidade</StyledTypography>
        <StyledTypography classText="Caption" tag="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam voluptatum nihil dicta iusto eos quas, dolore facere consequatur aut incidunt vel molestiae. Quam et vel maiores consequatur minima eius!</StyledTypography>
        <Button size={'lg'} theme={'primary'} type={'button'} onclick={() => console.log('funcionei')}>Solicitar Doação</Button>
    </ProductInfosStyled>
  )
}
