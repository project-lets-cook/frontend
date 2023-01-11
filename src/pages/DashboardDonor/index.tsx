import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { SearchItens } from "../../Components/SearchItens";
import { SetStateAction, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";
import { ProductDonor } from "../../Components/ProductDonor";
import { Modal } from "../../Components/Modal";
import { Footer } from "../../Components/Footer";

export const DashboardDonor = () => {
  const { filteredMyDonations } = useContext(DonationContext);
  const { isDonor, openModal } = useContext(UserContext);


  return (isDonor ? (
    <>
    {openModal && <Modal name={""}><ProductDonor /></Modal>}
    <StyledDashboard>
      <Header />
      <section className="container">
        <SearchItens />
        <CategoriesMenu />
        <ul>
          {filteredMyDonations.length === 0 ? 
            <div className="waring-my-donations">
              <p>Você ainda não fez doações</p>
            </div> 
            : filteredMyDonations.map((element) => (
            <CardDonor
              element={element}
              key={element.id}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboard>
</>
  ) : (
    <Navigate to="/DashboardReceiver" />
  )
};
