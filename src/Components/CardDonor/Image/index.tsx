import { StyledImageCards } from "./styles";
import Cereals from "../../../assets/icons/Cereals.svg";
import Fruits from "../../../assets/icons/fruits.svg";
import Vegetables from "../../../assets/icons/Vegetables.svg";
import MeatAndEggs from "../../../assets/icons/MeatAndEggs.svg";
import Milk from "../../../assets/icons/Milk.png";
import oils from "../../../assets/icons/oils.svg";

interface icategory {
  category: string;
}

export const ImageCards = ({ category }: icategory) => {
  return (
    <StyledImageCards>
      {category === "Cereals" && <img src={Cereals} alt={category} />}
      {category === "Vegetables" && (
        <img
          src={
            "https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2019/06/hortalica-verdura-legumes-qual-a-diferenca-entre-eles-2-e1629220373341.jpg"
          }
          alt={category}
        />
      )}
      {category === "Fruits" && (
        <img
          src="https://www.rbsdirect.com.br/imagesrc/25370856.jpg?w=1024&h=768&a=c"
          alt={category}
        />
      )}
      {category === "MeatAndEggs" && (
        <img
          src={
            "https://static1.conquistesuavida.com.br/articles//4/11/70/4/@/30280-para-manter-um-nivel-alto-de-proteinas-n-article_block_media-2.jpg"
          }
          alt={category}
        />
      )}
      {category === "Milk" && (
        <img
          src={
            "https://cienciadoleite.com.br/images/noticias/3396/3396_15092015081348.jpg"
          }
          alt={category}
        />
      )}
      {category === "oils" && (
        <img
          src={
            "https://s2.glbimg.com/7y2wJL5kZ3Lh97vWFFfO3DzW3YE=/0x0:1874x1600/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2017/10/30/istock-516727928.jpg"
          }
          alt={category}
        />
      )}
    </StyledImageCards>
  );
};
