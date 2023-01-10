import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { ImageCards } from "./Image";
import { StyledCard } from "./styles";

export interface IElement {
  userId: string;
  title: string;
  category: string;
  validation: string;
  description: string;
  amounts: string;
  id: string;
}

interface icard {
  element: IElement;
}
export const CardDonor = ({ element }: icard) => {
  const { title, category } = element;
  const { typeUser, modalOpen } = useContext(UserContext);
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
            onclick={() => modalOpen()}
          >
            Detalhes
          </Button>
        )}
      </div>
    </StyledCard>
  );
};
