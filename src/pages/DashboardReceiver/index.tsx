import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/footer";
import { CardDonor } from "../../Components/CardDonor";
import { SetStateAction, useContext } from "react";
import { Modal } from "../../Components/Modal";
import { ProductInfos } from "../../Components/ProductInfsos";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { StyledDashboard } from "../DashboardDonor/styled";
import { SheradItens } from "../../Components/SheradItens";
import { DonationContext } from "../../contexts/DonationContext";

export const DashboardReceiver = () => {

  const { openModal, modalOpen, isDonor, loadingUser } = useContext(UserContext)
  const { filteredDonations } = useContext(DonationContext)


  return (!isDonor ? (
    <StyledDashboard>
      {openModal && <Modal name={""}><ProductInfos /></Modal>}
      <Header />
      <section className="container">
        <SheradItens />
        <CategoriesMenu />
        <ul>
          {filteredDonations.map((element) => (
            <CardDonor
              element={element}
              key={element.id}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }} />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboard>
  ) :
    (<Navigate to="/DashboardDonor" />)
  )
}
