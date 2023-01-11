import { StyledTypography } from '../BaseTypography/style'
import { Button } from '../Button'
import { ProductInfosStyled } from './styled'
import { DonationContext } from '../../contexts/DonationContext'
import { useContext } from 'react'
import { ImageCategories } from '../ImageCategories'
import { CardDonation } from '../CardDonation'
import { iReciver } from '../../contexts/DonationContext/types'
import { iUser } from '../../contexts/UserContext/types'

export const ProductDonor = () => {
  const { donation, requests } = useContext(DonationContext)
  console.log(requests);

  return (
    <ProductInfosStyled>
      <ImageCategories category={donation.category} />
      <StyledTypography classText="Heading3" tag="h2">{donation.title}</StyledTypography>
      <ul>
        {requests.map((request: iReciver, index) =>
          <CardDonation request={request} key={index} />)
        }
      </ul>
    </ProductInfosStyled>
  )

}
