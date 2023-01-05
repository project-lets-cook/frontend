import { Card } from "../../Components/Card"
import { CategoriesMenu } from "../../Components/CategoriesMenu"
import { Header } from "../../Components/Header"
import { aliments } from "../../services/base"
import { StyledDashboardDonor } from "./styled"


export const DashboardDonor = () => {

  return (
    <StyledDashboardDonor>
      <Header />
      <section className="container">
        
      </section>
      <section className="container">
        <ul>
          {
            aliments.map((element) =>
              <Card element={element} key={element.id} />)
          }
        </ul>
        <CategoriesMenu />
      </section>
    </StyledDashboardDonor>
  )
}