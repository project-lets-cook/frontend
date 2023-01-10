import { CategoriesMenu } from "../../Components/CategoriesMenu"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/footer"
import { CardDonor } from "../../Components/CardDonor"
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

  const {openModal, user, loadingUser} = useContext(UserContext)
  const {filteredDonations} = useContext(DonationContext)

  if (loadingUser) {
    return null
  }

  return ( user ?
    ( !user?.donor ? <StyledDashboard>
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
    : 
    <Navigate to= "/DashboardDonor"/>)
    : <Navigate to = "/"/>
  )
}