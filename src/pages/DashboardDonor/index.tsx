import { CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { Footer } from "../../Components/footer";
import { SheradItens } from "../../Components/SheradItens";
import { SetStateAction, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";

export const DashboardDonor = () => {
  const { filteredDonations } = useContext(DonationContext);
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
            {filteredDonations.map((element) => (
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
  ) : (
    <Navigate to="/" />
  );
};
