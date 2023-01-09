import { StyledImageCards } from "./styles"
import Cereals from "../../../assets/icons/Cereals.svg"
import Fruits from "../../../assets/icons/fruits.svg"
import Vegetables from "../../../assets/icons/Vegetables.svg"
import MeatAndEggs from "../../../assets/icons/MeatAndEggs.svg"
import Milk from "../../../assets/icons/Milk.png"
import oils from "../../../assets/icons/oils.svg"
import basicbasket from "../../../assets/icons/basicbasket.svg"

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
      {category === "nonPerishable" && <img src={basicbasket} alt={"Não Pereciveis"} />}
    </StyledImageCards>
  )
}

