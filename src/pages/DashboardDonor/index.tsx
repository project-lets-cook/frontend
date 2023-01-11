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
import { useState } from "react";

export const DashboardDonor = () => {
  const [modalProductDonor, setModalProductDonor] = useState(false)
  const { filteredMyDonations } = useContext(DonationContext);
  const { isDonor, openModal } = useContext(UserContext);

  return isDonor ? (
    <>
      {modalProductDonor && (
        <Modal name={""}
          state={modalProductDonor}
          setState={setModalProductDonor} >
          <ProductDonor />
        </Modal>
      )}
      <StyledDashboard>
        <Header />
        <section className="container">
          <SearchItens />
          <CategoriesMenu />
          <ul>
            {filteredMyDonations.length === 0 ? (
              <div className="waring-my-donations">
                <p>Você ainda não fez doações</p>
              </div>
            ) : (
              filteredMyDonations.map((element) => (
                <CardDonor
                  element={element}
                  key={element.id}
                  setModal={setModalProductDonor} />
              ))
            )}
          </ul>
        </section>
        <Footer />
      </StyledDashboard>
    </>
  ) : (
    <Navigate to="/DashboardReceiver" />
  );
};
