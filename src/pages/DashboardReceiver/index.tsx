import { CardInformation } from "../../Components/CardInformation"
import { CategoriesMenu } from "../../Components/CategoriesMenu"
import { Header } from "../../Components/Header"
import { aliments } from "../../services/base"
import { IElement } from "../DashboardDonor"
import register from "../../assets/icons/register.png"
import donate from "../../assets/icons/donate.png"
import { Footer } from "../../Components/footer"
import { CardDonor } from "../../Components/CardDonor"
import { Button } from "../../Components/Button"
import { useContext } from "react"
import { Modal } from "../../Components/Modal"
import { ProductInfos } from "../../Components/ProductInfsos"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom"
import { StyledDashboard } from "../DashboardDonor/styled"
import { SheradItens } from "../../Components/SheradItens"
import { SelectCity } from "../../Components/Forms/Select"
import { DonationContext } from "../../contexts/DonationContext"

export const DashboardReceiver = () => {

  const { openModal, modalOpen, isDonor, loadingUser } = useContext(UserContext)
  const { filteredDonations } = useContext(DonationContext)


  return (!isDonor ? (
    <StyledDashboard>
      {openModal && <Modal name={""}><ProductInfos /></Modal>}
      <Header />
      <section className="container">
        <SheradItens />
        <SelectCity />
        <CategoriesMenu />
        <ul>
          {filteredDonations.map((element) => (
            <CardDonor element={element} key={element.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboard>
  ) :
    (<Navigate to="/DashboardDonor" />)
  )
}