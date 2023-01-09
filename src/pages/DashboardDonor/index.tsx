import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { aliments } from "../../services/base";
import { StyledDashboardDonor } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

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

export const DashboardDonor = () => {

  const { user, loadingUser } = useContext(UserContext)

  if (loadingUser) {
    return null
  }

    return ( user ? 
       (user?.donor ? 
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
      :
      <Navigate to="/DashboardReceiver"/>)
      : <Navigate to= "/"/>
    );
};
