import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { aliments } from "../../services/base";
import { StyledDashboardDonor } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";

export interface IElement {
  userId: number;
  title: string;
  category: string;
  validation: string;
  descripition: string;
  amounts: number;
  id: number;
}

export const DashboardDonor = () => {
  return (
    <StyledDashboardDonor>
      <Header />
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
    </StyledDashboardDonor>
  );
};
