import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { ImageCategories } from "../ImageCategories";
import { StyledCard } from "./styles";

export interface IElement {
  userId: number;
  title: string;
  category: string;
  validation: string;
  descripition: string;
  amounts: number;
  id: number;
}

interface icard {
  element: IElement;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CardDonor = ({ element, setModal }: icard) => {
  const { title, category, id } = element;
  const { isDonor } = useContext(UserContext);
  const { getDonationbyId } = useContext(DonationContext);

  const openModal = () => {
    const state = getDonationbyId(id)
    setModal(state)
  }
  return (
    <StyledCard>
      <ImageCategories category={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">
          {title}
        </StyledTypography>
        <StyledTypography classText="Body" tag="p">
          {category}
        </StyledTypography>
        <Button
          size={"md"}
          theme={"transparent"}
          type={"button"}
          onclick={openModal}
        >
          Detalhes
        </Button>

      </div>
    </StyledCard>
  );
};
