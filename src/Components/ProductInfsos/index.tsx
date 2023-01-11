import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { ProductInfosStyled } from "./styled";
import { DonationContext } from "../../contexts/DonationContext";
import { useContext } from "react";
import { ImageCategories } from "../ImageCategories";
import { iPropsState } from "../../contexts/DonationContext/types";



export const ProductInfos = ({ setState }: iPropsState) => {
  const { donation, requestDonation } = useContext(DonationContext);

  const closeModal = async () => {
    const state = await requestDonation(donation.id)
    setState(state)
  }
  {
    return (
      <ProductInfosStyled>
        <ImageCategories category={donation.category} />
        <StyledTypography classText="Heading3" tag="h2">{donation.title}</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Cidade/Estado</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Categoria: {donation.category}</StyledTypography>
        <StyledTypography classText="Caption" tag="h6">Quantidade: {donation.amounts}</StyledTypography>
        <StyledTypography classText="Caption" tag="p">{donation.descripition}</StyledTypography>
        <Button size={'lg'} theme={'primary'} type={'button'} onclick={closeModal}>Solicitar Doação</Button>
      </ProductInfosStyled>
    );
  }
};
