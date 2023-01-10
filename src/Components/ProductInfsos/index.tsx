import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button'
import { ProductInfosStyled } from './styled'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'

export const ProductInfos = () => {

  const { donationInfo } = useContext(DonationContext)

  if (donationInfo) {
   return (
    <ProductInfosStyled>
        <img src={donationInfo.category} alt="" />
        <StyledTypography classText="Heading3" tag="h2">{donationInfo.title}</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Cidade/Estado</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Categoria: {donationInfo.category}</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Quantidade: {donationInfo.amounts}</StyledTypography>
        <StyledTypography classText="Caption" tag="p">{donationInfo.descripition}</StyledTypography>
        <Button size={'lg'} theme={'primary'} type={'button'} onclick={() => console.log('funcionei')}>Solicitar Doação</Button>
    </ProductInfosStyled>
  )
  } else {
    return (
      <>
      <p></p>
      </>
    )
  }
  
}
