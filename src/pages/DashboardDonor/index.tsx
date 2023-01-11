import { categories, CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { SearchItens } from "../../Components/SearchItens";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";
import { ProductDonor } from "../../Components/ProductDonor";
import { Modal } from "../../Components/Modal";
import { Footer } from "../../Components/Footer";
import { useState } from "react";
import { AddDonarionForm } from "../../Components/Forms/FormAddDonation";
import { Button } from "../../Components/Button";
import { ModalProfile } from "../../Components/Modal/modalProfile";

export const DashboardDonor = () => {

  const [modalProductDonor, setModalProductDonor] = useState(false);
  const [modalAddDonarionForm, setAddDonarionForm] = useState(false);
  const { myDonations, filteredMyDonations, setFilteredMyDonations } = useContext(DonationContext);
  const { isDonor, modalProfile, setModalProfile } = useContext(UserContext);


  const changeCategory = (cat: string) => {
    if (cat === "Todas as Categorias") {
      setFilteredMyDonations(myDonations);
    } else {
      setFilteredMyDonations(
        myDonations.filter((donation) => donation.category === cat)
      );
    }
  };

  return isDonor ? (
    <>
      {modalProfile && 
      <Modal name={"Editar Perfil"}
        state={modalProfile}
        setState={setModalProfile}>
        <ModalProfile/>
      </Modal>
      }
      {modalProductDonor &&
        <Modal name={""}
          state={modalProductDonor}
          setState={setModalProductDonor}
        >
          <ProductDonor />
        </Modal>
      )}
      {modalAddDonarionForm && (
        <Modal
          name={"Adicionar Doação"}
          state={modalAddDonarionForm}
          setState={setAddDonarionForm}
        >
          <AddDonarionForm />
        </Modal>
      )}
      <StyledDashboard>
        <Header />
        <main>
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
                    setModal={setModalProductDonor}
                  />
                ))
              )}
            </ul>
            <select id="categorys" onChange={(event) => changeCategory(event.target.value)}>
              {categories.map((ele, i) => <option key={i} value={ele}>{ele}</option>)}
            </select>
            <Button
              size={"md"}
              theme={"primary"}
              type={"button"}
              onclick={() => {
                setAddDonarionForm(true);
              }}
            >
              +
            </Button>
          </section>
        </main>
        <Footer />
      </StyledDashboard>
    </>
  ) : (
    <Navigate to="/DashboardReceiver" />
  );
};
