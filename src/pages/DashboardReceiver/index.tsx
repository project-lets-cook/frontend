import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { aliments } from "../../services/base";
import { StyledDashboardDonor } from "../DashboardDonor/styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";
import { SelectCity } from "../../Components/Forms/Select";

export interface IElement {
  userId: number;
  img: string;
  title: string;
  category: string;
  validation: string;
  descripition: string;
  amounts: string;
  address: string;
  id: number;
}

export const DashboardReceiver = () => {
  return (
    <StyledDashboardDonor>
      <Header />
      <section className="container">
        <SheradItens />
        <SelectCity />
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
