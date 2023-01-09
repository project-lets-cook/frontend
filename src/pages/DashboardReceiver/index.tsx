import { CardInformation } from "../../Components/CardInformation"
import { CategoriesMenu } from "../../Components/CategoriesMenu"
import { Header } from "../../Components/Header"
import { aliments } from "../../services/base"
import { IElement } from "../DashboardDonor"
import register from "../../assets/icons/register.png"
import donate from "../../assets/icons/donate.png"
import warm from "../../assets/icons/warm.png"
import { StyledDashboardReceiver } from "./styled"
import { Footer } from "../../Components/footer"
import { CardDonor } from "../../Components/CardDonor"
import { Button } from "../../Components/Button"
import { useContext } from "react"
import { Modal } from "../../Components/Modal"
import { ProductInfos } from "../../Components/ProductInfsos"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom"

export const DashboardReceiver = () => {

  const {openModal, modalOpen, user, loadingUser} = useContext(UserContext)

  if (loadingUser) {
    return null
  }

  return ( user ?
    ( !user?.donor ? <StyledDashboardReceiver>
      {openModal && <Modal><ProductInfos /></Modal>}
      <Header />
      <section className="container">
        <SheradItens />
        <SelectCity />
        <CategoriesMenu />
        <ul>
          {aliments.map((element: IElement) => (
            <CardDonor element={element} key={element.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboardReceiver> 
    : 
    <Navigate to= "/DashboardDonor"/>)
    : <Navigate to = "/"/>
  )
}