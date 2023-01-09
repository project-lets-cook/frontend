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
import { SheradItens } from "../../Components/SheradItens"

export const DashboardReceiver = () => {
  const {openModal, modalOpen} = useContext(UserContext)
  console.log(openModal)
  return (
    <StyledDashboardReceiver>
      {openModal && <Modal><ProductInfos /></Modal>}
      <Header />
      <Button size={"lg"} theme={"primary"} type={"button"} onclick={() => modalOpen()}>Teste</Button>
      <section className="container">
        <SheradItens />
        <CategoriesMenu />
        <ul>
          {aliments.map((element: IElement) => (
            <CardDonor element={element} key={element.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboardReceiver>
  )
}

