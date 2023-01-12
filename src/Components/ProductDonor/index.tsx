import { ProductInfosStyled } from './styled'
import { StyledTypography } from '../BaseTypography/style'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'
import { ImageCategories } from '../ImageCategories'
import { CardDonation } from '../CardDonation'
import { iPropsState, iReciver } from '../../contexts/DonationContext/types'
import { CiFaceFrown } from "react-icons/ci";

export const ProductDonor = ({ setState }:iPropsState) => {
  const { donation, requests } = useContext(DonationContext)

  return (
    <ProductInfosStyled>
      <ImageCategories category={donation.category} />
      <StyledTypography classText="Heading3" tag="h2">{donation.title}</StyledTypography>
      <ul>
        {requests ? (requests.map((request: iReciver, index) =>
          <CardDonation request={request} setState={setState } key={index} />)) : (
            <div>
              <StyledTypography classText="Heading" tag="p">
                Ninguem se canditatou por aqui 
              </StyledTypography>
              <CiFaceFrown />
            </div>
        )
        }
      </ul>
    </ProductInfosStyled>
  )

}
