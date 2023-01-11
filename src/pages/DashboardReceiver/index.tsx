import { categories, CategoriesMenu } from "../../Components/CategoriesMenu";
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
import { Button } from "../../Components/Button";

export const DashboardReceiver = () => {
  const [modalProductInfos, setModalProductInfos] = useState(false)

  const { isDonor } = useContext(UserContext);
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


  function setAddDonarionForm(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return !isDonor ? (
    <>
      {modalProductInfos && (
        <Modal name={""} state={modalProductInfos} setState={setModalProductInfos}>
          <ProductInfos setState={setModalProductInfos} />
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
              />
            ))}
          </ul>
          <select id="categorys" onChange={(event) => changeCategory(event.target.value)}>
              {categories.map((ele) => <option value={ele}>{ele}</option>)}
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
    <Navigate to="/DashboardDonor" />
  );
};
