import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { aliments } from "../../services/base";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";

export interface IElement {
  userId: string;
  title: string;
  category: string;
  validation: string;
  description: string;
  amounts: string;
  id: string;
}

export const DashboardDonor = () => {
  const { filteredDonations, setFilteredProducts } = useContext(DonationContext);
  const { user, loadingUser } = useContext(UserContext);

  if (loadingUser) {
    return null;
  }

  return user ? (
    user?.donor ? (
      <StyledDashboard>
        <Header />
        <section className="container">
          <SheradItens />
          <CategoriesMenu />
          <ul>
            {filteredProducts && filteredProducts.length
              ? filteredProducts.map((element: IElement) => (
                  <CardDonor element={element} key={element.id} />
                ))
              : aliments.map((element: IElement) => (
                  <CardDonor element={element} key={element.id} />
                ))}
          </ul>
        </section>
        <Footer />
      </StyledDashboard>
    ) : (
      <Navigate to="/DashboardReceiver" />
    )
  ) : (
    <Navigate to="/" />
  );
};
