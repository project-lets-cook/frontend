import { useState } from "react";
import { StyledCategoriesMenu } from "./styles";

const categories = [
  "Todas as Categorias",
  "Açúcares e Doces",
  "Carnes e Ovos",
  "Cereais, Pães e Tubérculos",
  "Frutas",
  "Hortaliças",
  "Leite e Derivados",
  "Leguminosas",
  "Óleos e Gorduras",
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
