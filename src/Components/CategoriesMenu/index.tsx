import { useState } from "react";
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
  "Não Pereciveis",
];

export const CategoriesMenu = () => {
  const [selected, setSelected] = useState("Todas as Categorias");

  return (
    <StyledCategoriesMenu>
      <nav>
        {categories.map((category, index) => (
          <button
            className={category === selected ? "selected-menu" : ""}
            key={index}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </StyledCategoriesMenu>
  );
};
