import { useContext, useState } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { StyledCategoriesMenu } from "./styles";

const categories = [
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
  const { donations, setFilteredDonations } = useContext(DonationContext);
  const [selected, setSelected] = useState("Todas as Categorias");

  const filterCategoy = (category: string) => {
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
            onClick={() => filterCategoy(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </StyledCategoriesMenu>
  );
};
