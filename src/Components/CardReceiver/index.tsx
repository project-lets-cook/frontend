import { iReciver } from "../../contexts/DonationContext/types";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { StyledCardReceiver } from "./styles";

interface Irequest{
  request: iReciver
}


export const CardReceiver = ({ request }: Irequest) => {
  console.log(request)

  return (
    <StyledCardReceiver>
      <div className="containerli">
        <img src={request.img} alt="" />
        <StyledTypography classText="Body" tag="p">
          {request.name?.substring(0,20)}
        </StyledTypography>
        <Button
          size={"sm"}
          theme={"primary"}
          type={"button"}
        // onclick={() => }
        >Doar</Button>
      </div>
    </StyledCardReceiver>
  );
};
