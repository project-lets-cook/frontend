import { StyledImageCards } from "./styles"
import Cereals from "../../../assets/icons/Cereals.svg"
import fruits from "../../../assets/icons/fruits.svg"
import Vegetables from "../../../assets/icons/Vegetables.svg"
import MeatAndEggs from "../../../assets/icons/MeatAndEggs.svg"
import Milk from "../../../assets/icons/Milk.png"
import oils from "../../../assets/icons/oils.svg"

interface icategory {
  category: "Cereals" | "Vegetables" | "Fruits" | "MeatAndEggs" | "Milk" | "oils" | "sugars"
}

export const ImageCards = ({ category }: icategory) => {

  return (
    <StyledImageCards>
      {category === "Cereals" && < img src={Cereals} alt={category} />}
      {category === "Vegetables" && <img src={Vegetables} alt={category} />}
      {category === "Fruits" && <img src={fruits} alt={category} />}
      {category === "MeatAndEggs" && <img src={MeatAndEggs} alt={category} />}
      {category === "Milk" && <img src={Milk} alt={category} />}
      {category === "oils" && <img src={oils} alt={category} />}
    </StyledImageCards>
  )
}

