import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { BsLinkedin } from "react-icons/Bs";
import { FaGithub } from "react-icons/fa";
import { ImgWrap, StyledAboutCarousel } from "./styles";
import { ReactElement } from "react";

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  568: { items: 3 },
  780: { items: 4 },
  1024: { items: 5 },
};

const team = [
  {
    name: "Davi S Santana",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03PBPR977H-4b241aa4920f-512",
    linkedin: "https://www.linkedin.com/in/davi-s-s/",
    github: "https://github.com/DaviSouzaS",
  },
  {
    name: "Lilian Fernandes",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03QUFWL55E-422d74c631a4-512",
    linkedin:
      "https://www.linkedin.com/in/lilian-fernandes-oliveira-dias-4a159578/",
    github: "https://github.com/lilianfdias",
  },
  {
    name: "Lucas Rodrigues",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03M3JVRKG8-12ade23204be-512",
    linkedin: "https://www.linkedin.com/in/lucas-rodrigues-da-silva-168274201/",
    github: "https://github.com/LucasRodrigues23",
  },
  {
    name: "Natã Lomeu",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03KV6GAD88-b91d9b18f194-512",
    linkedin: "https://www.linkedin.com/in/natangaf/",
    github: "https://github.com/Natangaf",
  },
  {
    name: "Renata Costa",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03P34Z7H2S-4c6bcbc14409-512",
    linkedin: "https://www.linkedin.com/in/renataracosta/",
    github: "https://github.com/Ray-Costa",
  },
  {
    name: "Tamir S. Ferreira",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03MXQXUQLC-34319a016b9b-512",
    linkedin: "https://www.linkedin.com/in/tamir-ferreira/",
    github: "https://github.com/tamir-ferreira",
  },
];

const items: ReactElement[] = [];

team.map((dev, index) =>
  items.push(
    <StyledAboutCarousel key={index}>
      <ImgWrap>
        <img src={dev.avatar} alt="imagem de avatar" draggable="false" />
      </ImgWrap>
      <h4>{dev.name}</h4>
      <hr />
      <div>
        <span>
          <a href={dev.linkedin} target="_blank">
            <BsLinkedin /> Linkedin
          </a>
        </span>
        <span>
          <a href={dev.github} target="_blank">
            <FaGithub /> Github
          </a>
        </span>
      </div>
    </StyledAboutCarousel>
  )
);

export const AboutCarousel = () => (
  <AliceCarousel
    mouseTracking
    touchTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    disableButtonsControls
    animationDuration={4000}
    autoPlay
    paddingLeft={70}
    autoPlayStrategy="default"
    infinite
  />
);
