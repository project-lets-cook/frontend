import { iReciver } from "../../contexts/DonationContext/types";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { StyledCardDonation } from "./styles";
import imgError from "../../assets/img/imgnotfound.jpg"
import { SyntheticEvent, useContext } from "react"
import { DonationContext } from "../../contexts/DonationContext";
interface Irequest {
  request: iReciver,
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardDonation = ({ request, setState }: Irequest) => {

  const { sendDonation } = useContext(DonationContext)

  const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = `${imgError}`;
  }

  const sendDonationConfig = async () => {
    const state = await sendDonation()
    setState(state)
  }

  return (
    <StyledCardDonation>
      <div className="containerli">
        {request ? <img src={request.img} alt="profilepic" onError={addDefaultImg} /> :
          <img src={imgError} alt='profilepic' />}
        <StyledTypography classText="Body" tag="p">
          {request.name?.substring(0, 20)}
        </StyledTypography>
        <Button
          size={"sm"}
          theme={"primary"}
          type={"button"}
          onclick={sendDonationConfig}
        >Doar</Button>
      </div>
    </StyledCardDonation>
  );
};
