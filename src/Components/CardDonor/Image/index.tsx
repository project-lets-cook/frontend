import { StyledImageCards } from "./styles"
import Cereals from "../../../assets/img/Cereals.jpeg"
import Fruits from "../../../assets/img/fruits.jpg"
import Vegetables from "../../../assets/img/Vegetables.jpg"
import MeatAndEggs from "../../../assets/img/MeatAndEggs.jpg"
import Milk from "../../../assets/img/Milk.jpg"
import oils from "../../../assets/img/oils.jpg"
import basicbasket from "../../../assets/img/basicbasket.jpg"
import NoPherecives from "../../../assets/img/NoPherecives.jpg"

interface icategory {
  category: string;
}

export const ImageCards = ({ category }: icategory) => {
  return (
    <StyledImageCards>
      {category === "Cereals" && < img src={Cereals} alt={"Cereais"} />}
      {category === "Vegetables" && <img src={Vegetables} alt={"Hortaliças"} />}
      {category === "Fruits" && <img src={Fruits} alt={"Frutas"} />}
      {category === "MeatAndEggs" && <img src={MeatAndEggs} alt={"Carnes & Ovos"} />}
      {category === "Milk" && <img src={Milk} alt={"Leite e Derivados"} />}
      {category === "oils" && <img src={oils} alt={"Oleos & Gorduras"} />}
      {category === "basicbasket" && <img src={basicbasket} alt={"Cesta Basica"} />}
      {category === "NoPherecives" && <img src={NoPherecives} alt={"Não Pereciveis"} />}
    </StyledImageCards>
  );
};
