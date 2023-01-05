import { StyledCategoriesMenu } from "./styles";

const categories = [
  "Açúcares e doces",
  "Carnes e ovos",
  "Cereais, pães e tubérculos",
  "Frutas",
  "Hortaliças",
  "Leite e derivados",
  "Leguminosas",
  "Óleos e gorduras",
];

export const CategoriesMenu = () => {
  return (
    <StyledCategoriesMenu>
      <nav>
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </nav>
    </StyledCategoriesMenu>
  );
};
