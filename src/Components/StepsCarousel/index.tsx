import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import register from "../../assets/icons/register.png";
import donate from "../../assets/icons/donate.png";
import sherad from "../../assets/icons/sherad.png";
import warm from "../../assets/icons/warm.png";
import finish from "../../assets/icons/finish.png";
import { ReactElement } from "react";
import { CardInformation } from "../CardInformation";
import { StyledStepsCarousel } from "./styles";

interface iStepsCarousel {
  mode: string;
}

const donor: ReactElement[] = [
  <CardInformation img={register} value="1" text="Registre-se no do.Ação" />,
  <CardInformation img={donate} value="2" text="Cadastre sua doação" />,
  <CardInformation
    img={warm}
    value="3"
    text="Aqueça seu coração com uma doação bem-sucedida"
  />,
];
const receiver: ReactElement[] = [
  <CardInformation img={register} value="1" text="Registre-se no do.Ação" />,
  <CardInformation
    img={finish}
    value="3"
    text="Receba uma doação e ajude a quem precisa"
  />,
  <CardInformation
    img={sherad}
    value="2"
    text="Procure a categoria que sua ONG necessita"
  />,
];

const responsive = {
  1200: {
    items: 1,
    itemsFit: "undefined",
  },
};

export const StepsCarousel = ({ mode }: iStepsCarousel) => (
  <StyledStepsCarousel>
    <AliceCarousel
      mouseTracking
      touchTracking
      items={mode == "donor" ? donor : receiver}
      responsive={responsive}
      // controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      animationDuration={2000}
      autoPlay
      autoPlayInterval={6000}
      // paddingRight={10}
      autoPlayDirection={mode == "donor" ? "ltr" : "rtl"}
      swipeDelta={1000}
      autoPlayStrategy="default"
      infinite
    />
  </StyledStepsCarousel>
);
