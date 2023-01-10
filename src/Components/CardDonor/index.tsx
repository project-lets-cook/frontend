import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { ImageCards } from "./Image";
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
  const { typeUser, modalOpen } = useContext(UserContext);
  const { getDonationbyId } = useContext(DonationContext);

  const openDonationInfos = (id: number) => {
    getDonationbyId(id);
  };
  return (
    <StyledCard>
      <ImageCards category={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">
          {title}
        </StyledTypography>

        <StyledTypography classText="Body" tag="p">
          {category}
        </StyledTypography>
        {/* <hr /> */}
        {typeUser ? (
          <Button
            size={"md"}
            theme={"transparent"}
            type={"button"}
            onclick={() => modalOpen()}
          >
            Detalhes
          </Button>
        ) : (
          <Button
            size={"md"}
            theme={"transparent"}
            type={"button"}
            onclick={() => getDonationbyId(id)}
          >
            Detalhes
          </Button>
        )}
      </div>
    </StyledCard>
  );
};
