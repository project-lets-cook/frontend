import { Input } from "../../Forms/Input";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../index";
import { Button } from "../../Button";
import { DonationUpdateStyled } from "./modalProductUpdate";
import { DonationContext } from "../../../contexts/DonationContext";

interface IdataProductUpdate {
  amounts: number;
}

type FormProductUpdate = {
  amounts: number;
};

interface IPropsModalProductUpdate {
  id: number;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalProductUpdate = ({ setState, id }: IPropsModalProductUpdate) => {
  const { donations, editQuantity, deleteDonation } =
    useContext(DonationContext);

  const product = donations.find((donation) => id === donation.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductUpdate>();

  const testeModalProductUpdate = (data: IdataProductUpdate) => {};

  return (
    <DonationUpdateStyled>
      <div>
        <div>
          <span id="titleDescription">Alimento:</span>
          <span>{product?.title}</span>
        </div>
        <div>
          <span id="titleDescription">Descrição:</span>
          <span>{product?.descripition}</span>
        </div>
        <div>
          <span id="titleDescription">Categoria:</span>
          <span>{product?.category}</span>
        </div>
        <div>
          <span id="titleDescription">Vencimento:</span>
          <span>{product?.validation}</span>
        </div>
        <div>
          <span id="titleDescription">Quantidade:</span>
          <span>{product?.amounts}</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit((data: { amounts: number }) => {
          editQuantity({ amounts: data.amounts, id: id });
        })}
      >
        <Input
          label={"Quantidade"}
          id={"amounts"}
          type={"text"}
          placeholder={"Digite a quantidade desejada"}
          register={register("amounts")}
        ></Input>
        <Button size={"lg"} theme={"primary"} type={"submit"}>
          Atualizar Doação
        </Button>
        <Button
          size={"lg"}
          type="button"
          theme={"white"}
          onclick={() => {
            deleteDonation(id);
          }}
        >
          Deletar
        </Button>
      </form>
    </DonationUpdateStyled>
  );
};
