import { categories, CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Foote";
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
import { ModalProductUpdate } from "../../Components/Modal/modalProductsUpdate";


export const DashboardReceiver = () => {
  const [modalProductInfos, setModalProductInfos] = useState(false);
  const [modalProductUpdate, setModalProductUpdate] = useState(false);
  const [idDonate, setidDonate] = useState(0);
  const { isDonor, modalProfile, setModalProfile } = useContext(UserContext);
  const { filteredDonations, setFilteredDonations, donations } = useContext(DonationContext);

  const changeCategory = (cat: string) => {
    if (cat === "Todas as Categorias") {
      setFilteredDonations(donations);
    } else {
      setFilteredDonations(
        donations.filter((donation) => donation.category === cat)
      );
    }
  };

  return !isDonor ? (
    <>
      {modalProfile &&
        <Modal name={"Editar Perfil"}
          state={modalProfile}
          setState={setModalProfile}>
          <ModalProfile />
        </Modal>
      }

      {modalProductInfos && (
        <Modal
          name={""}
          state={modalProductInfos}
          setState={setModalProductInfos}
        >
          <ProductInfos setState={setModalProductInfos} />
        </Modal>
      )}
      {modalProductUpdate && (
        <Modal
          name={""}
          state={modalProductUpdate}
          setState={setModalProductUpdate}
        >
          <ModalProductUpdate setState={setModalProductUpdate} id={idDonate} />
        </Modal>
      )}
      <StyledDashboard>
        <Header />
        <main>
          <section className="container">
            <SearchItens />
            <CategoriesMenu />
            <ul>
              {filteredDonations.map((element) => (
                <CardDonor
                  element={element}
                  key={element.id}
                  setModal={setModalProductInfos}
                  setEditDonor={setModalProductUpdate}
                  setIdModal={setidDonate}
                />
              ))}
            </ul>
            <select
              id="categorys"
              onChange={(event) => changeCategory(event.target.value)}
            >
              {categories.map((ele, i) => (
                <option key={i} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </section>
        </main>
        <Footer />
      </StyledDashboard>
    </>
  ) : (
    <Navigate to="/DashboardDonor" />
  );
};
