import { ModalProductDescriptionStyled } from "./modalProductDescription";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { DonationContext } from "../../../contexts/DonationContext";
import { iDonation } from "../../../contexts/DonationContext/types";

export const ModalProductDescription = ({ id }: { id: string }) => {
  const { donations } = useContext(DonationContext);

  const product = donations.find((donation) => id === donation.id);

  return (
    <ModalProductDescriptionStyled>
      <div id="titleDescription">
        <img src={product?.img} alt="" />
        <span>{product?.title}</span>
      </div>
      <div id="typeDescription">
        <div>
          <span id="title">Categoria:</span>
          <span>{product?.category}</span>
        </div>
        <div>
          <span id="title">Quantidade:</span>
          <span>{product?.amounts}</span>
        </div>
        <div>
          <span id="title">Cidade/estado:</span>
          <span>{product?.address}</span>
        </div>
      </div>
      <p>{product?.description}</p>
    </ModalProductDescriptionStyled>
  );
};
