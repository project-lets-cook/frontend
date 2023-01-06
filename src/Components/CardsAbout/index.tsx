import { ImgWrap, ListStyled } from "./style";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/Bs";

const team = [
  {
    name: "Davi S Santana",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03PBPR977H-4b241aa4920f-512",
    linkedin: "",
    github: "",
  },
  {
    name: "Lilian Fernandes",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03QUFWL55E-422d74c631a4-512",
    linkedin: "",
    github: "",
  },
  {
    name: "Lucas Rodrigues",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03M3JVRKG8-12ade23204be-512",
    linkedin: "",
    github: "",
  },
  {
    name: "Natã Lomeu",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03KV6GAD88-b91d9b18f194-512",
    linkedin: "",
    github: "",
  },
  {
    name: "Renata Costa",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03P34Z7H2S-4c6bcbc14409-512",
    linkedin: "",
    github: "",
  },
  {
    name: "Tamir S. Ferreira",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03MXQXUQLC-34319a016b9b-512",
    linkedin: "",
    github: "",
  },
];

export const CardsAbout = () => {
  return (
    <ListStyled>
      {team.map((dev, index) => (
        <li key={index}>
          <ImgWrap>
            <img src={dev.avatar} alt="imagem de avatar" />
          </ImgWrap>
          <h4>{dev.name}</h4>
          <hr />
          <div>
            <span>
              <a href={dev.linkedin}>
                <BsLinkedin /> Linkedin
              </a>
            </span>
            <span>
              <a href={dev.github}>
                <FaGithub /> Github
              </a>
            </span>
          </div>
        </li>
      ))}
    </ListStyled>
  );
};
