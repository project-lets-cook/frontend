import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { aliments } from "../../services/base";
import { StyledDashboardDonor } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";
import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";

export interface IElement {
  userId: string;
  img: string;
  title: string;
  category: string;
  validation: string;
  description: string;
  amounts: string;
  address: string;
  id: string;
}

export const DashboardDonor = () => {
  const { filteredProducts, setFilteredProducts } = useContext(DonationContext);
  return (
    <StyledDashboardDonor>
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
    </StyledDashboardDonor>
  );
};
