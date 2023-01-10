import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button'
import { ProductInfosStyled } from './styled'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'
import { ImageCategories } from '../ImageCategories'

export const ProductDonor = () => {
  const { donation } = useContext(DonationContext)
  console.log(donation);
  const request = donation.request
  return (
    <ProductInfosStyled>
      <ImageCategories category={donation.category} />
      <StyledTypography classText="Heading3" tag="h2">{donation.title}</StyledTypography>
      <ul>
        {request.map((element) => {
          <CardReceiver element={element } />
        })}
      </ul>
    </ProductInfosStyled>
  )

}
