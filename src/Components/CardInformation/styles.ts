import pas from "../../assets/icons/pas.png";
import styled from "styled-components";

export const StyledCardInformation = styled.div`
  margin-left: 15px;
  width: 130px;
  height: 125px;
  background-image: url(${pas});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    height: 85px;
    align-items: baseline;

    > img {
      position: relative;
      left: -20px;
      top: 5px;
      height: 100%;
    }

    > h2 {
      font-size: 45px;
      color: var(--color-primary);
    }
  }

  p {
    margin-top: 10px;
    font-size: 11px;
    font-weight: 600;
    width: 140px;
    overflow-wrap: break-word;
  }
`;
