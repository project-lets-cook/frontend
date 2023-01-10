import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button'
import { ProductInfosStyled } from './styled'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'
import Cereals from "../../assets/img/Cereals.jpeg"
import Fruits from "../../assets/img/fruits.jpg"
import Vegetables from "../../assets/img/Vegetables.jpg"
import MeatAndEggs from "../../assets/img/MeatAndEggs.jpg"
import Milk from "../../assets/img/Milk.jpg"
import oils from "../../assets/img/oils.jpg"
import basicbasket from "../../assets/img/basicbasket.jpg"
import NoPherecives from "../../assets/img/NoPherecives.jpg"

export const ProductInfos = () => {

  const { donationInfo } = useContext(DonationContext)

  if (donationInfo) {
    return (
      <ProductInfosStyled>
        {donationInfo.category === "Cereais" && < img src={Cereals} alt={"Cereais"} />}
        {donationInfo.category === "Hortaliças" && <img src={Vegetables} alt={"Hortaliças"} />}
        {donationInfo.category === "Frutas" && <img src={Fruits} alt={"Frutas"} />}
        {donationInfo.category === "Carnes & Ovos" && <img src={MeatAndEggs} alt={"Carnes & Ovos"} />}
        {donationInfo.category === "Leite e Derivados" && <img src={Milk} alt={"Leite e Derivados"} />}
        {donationInfo.category === "Oleos & Gorduras" && <img src={oils} alt={"Oleos & Gorduras"} />}
        {donationInfo.category === "Cesta Basica" && <img src={basicbasket} alt={"Cesta Basica"} />}
        {donationInfo.category === "Não Pereciveis" && <img src={NoPherecives} alt={"Não Pereciveis"} />}
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
