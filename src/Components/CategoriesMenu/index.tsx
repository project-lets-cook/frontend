import { useContext, useState } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledCategoriesMenu } from "./styles";

export const categories = [
  "Todas as Categorias",
  "Cereais",
  "Hortaliças",
  "Frutas",
  "Carnes & Ovos",
  "Leite e Derivados",
  "Óleos & Gorduras",
  "Cesta Basica",
  "Não Pereciveis",
];

export const CategoriesMenu = () => {
  const { donations, setFilteredDonations, myDonations, setFilteredMyDonations } = useContext(DonationContext);
  const { isDonor } = useContext(UserContext)
  const [selected, setSelected] = useState("Todas as Categorias");


  if (isDonor) {
    const filterCategory = (category: string) => {
      setSelected(category);
      if (category === "Todas as Categorias") {
        setFilteredMyDonations(donations);
      } else {
        setFilteredMyDonations(
          myDonations.filter((donation) => donation.category === category)
        );
      }
    };
  
    return (
      <StyledCategoriesMenu>
        <nav>
          {categories.map((category, index) => (
            <button
              className={category === selected ? "selected-menu" : ""}
              key={index}
              onClick={() => filterCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </StyledCategoriesMenu>
    );
  } else {
    const filterCategory = (category: string) => {
    setSelected(category);
    if (category === "Todas as Categorias") {
      setFilteredDonations(donations);
    } else {
      setFilteredDonations(
        donations.filter((donation) => donation.category === category)
      );
    }
  };

  return (
    <StyledCategoriesMenu>
      <nav>
        {categories.map((category, index) => (
          <button
            className={category === selected ? "selected-menu" : ""}
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </StyledCategoriesMenu>
  );
  }

  
};
