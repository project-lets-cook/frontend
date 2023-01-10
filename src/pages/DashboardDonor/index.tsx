import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SearchItens } from "../../Components/SearchItens";
import { SetStateAction, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";

export const DashboardDonor = () => {
  const { filteredMyDonations } = useContext(DonationContext);
  const { user, loadingUser ,isDonor } = useContext(UserContext);
 
  return (isDonor ? (
    <StyledDashboard>
      <Header />
      <section className="container">
        <SearchItens />
        <CategoriesMenu />
        <ul>
          {filteredMyDonations.map((element) => (
            <CardDonor
              element={element}
              key={element.id}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </StyledDashboard>
  ) : (
    <Navigate to="/DashboardReceiver" />
  )
  )
};
