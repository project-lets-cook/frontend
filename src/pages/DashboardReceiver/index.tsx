import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { CardDonor } from "../../Components/CardDonor";
import { SetStateAction, useContext, useState } from "react";
import { Modal } from "../../Components/Modal";
import { ProductInfos } from "../../Components/ProductInfsos";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { StyledDashboard } from "../DashboardDonor/styled";
import { SearchItens } from "../../Components/SearchItens";
import { DonationContext } from "../../contexts/DonationContext";
import { ModalProfile } from "../../Components/Modal/modalProfile";

export const DashboardReceiver = () => {
  const [modalProductInfos, setModalProductInfos] = useState(false)

  const { isDonor, modalProfile, setModalProfile } = useContext(UserContext);
  const { filteredDonations } = useContext(DonationContext);

  return !isDonor ? (
    <>
    {modalProfile && 
      <Modal name={"Editar Perfil"}
        state={modalProfile}
        setState={setModalProfile}>
        <ModalProfile/>
      </Modal>
      }

      {modalProductInfos && (
        <Modal name={""} state={modalProductInfos} setState={setModalProductInfos}>
          <ProductInfos setState={setModalProductInfos} />
        </Modal>
      )}
      <StyledDashboard>
        <Header />
        <section className="container">
          <SearchItens />
          <CategoriesMenu />
          <ul>
            {filteredDonations.map((element) => (
              <CardDonor
                element={element}
                key={element.id}
                setModal={setModalProductInfos}
              />
            ))}
          </ul>
        </section>
        <Footer />
      </StyledDashboard>
    </>
  ) : (
    <Navigate to="/DashboardDonor" />
  );
};
