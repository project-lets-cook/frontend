// import { StyledImageCards } from "./styles";
import Cereals from "../../assets/img/Cereals.jpeg";
import Fruits from "../../assets/img/fruits.jpg";
import Vegetables from "../../assets/img/Vegetables.jpg";
import MeatAndEggs from "../../assets/img/MeatAndEggs.jpg";
import Milk from "../../assets/img/Milk.jpg";
import oils from "../../assets/img/oils.jpg";
import basicbasket from "../../assets/img/basicbasket.jpg";
import NoPherecives from "../../assets/img/NoPherecives.jpg";

interface icategory {
  category: string | undefined;
}

export const ImageCategories = ({ category }: icategory) => {
  return (
    <figure>
      {category === "Cereais" && <img src={Cereals} alt={"Cereais"} />}
      {category === "Hortaliças" && <img src={Vegetables} alt={"Hortaliças"} />}
      {category === "Frutas" && <img src={Fruits} alt={"Frutas"} />}
      {category === "Carnes & Ovos" && <img src={MeatAndEggs} alt={"Carnes & Ovos"} />}
      {category === "Leite e Derivados" && <img src={Milk} alt={"Leite e Derivados"} />}
      {category === "Óleos & Gorduras" && <img src={oils} alt={"Óleos & Gorduras"} />}
      {category === "Cesta Basica" && <img src={basicbasket} alt={"Cesta Basica"} />}
      {category === "Não Pereciveis" && <img src={NoPherecives} alt={"Não Pereciveis"} />}
    </figure>
  );
};
