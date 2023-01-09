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
}
export const CardDonor = ({ element }: icard) => {
  const { title, category} = element;

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
        <Button
          size={"md"}
          theme={"transparent"}
          type={"button"}
          onclick={() => console.log("to funcionando")}
        >
          Detalhes
        </Button>
      </div>
    </StyledCard>
  );
};
