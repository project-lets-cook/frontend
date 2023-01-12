import { ProductInfosStyled } from './styled'
import { StyledTypography } from '../BaseTypography/style'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'
import { ImageCategories } from '../ImageCategories'
import { CardDonation } from '../CardDonation'
import { iPropsState, iReciver } from '../../contexts/DonationContext/types'
import { CiFaceFrown } from "react-icons/ci";

export const ProductDonor = ({ setState }:iPropsState) => {
  const { donation, request } = useContext(DonationContext)
  console.log(request)

  return (
    <ProductInfosStyled>
      <ImageCategories category={donation.category} />
      <StyledTypography classText="Heading3" tag="h2">{donation.title}</StyledTypography>
      <ul>
        {request.request ? (request.request.map((req: iReciver, index: any) =>
          <CardDonation request={req} setState={setState } key={index} />)) : (
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
