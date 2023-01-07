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
