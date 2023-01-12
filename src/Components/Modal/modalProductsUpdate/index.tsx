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

export const ModalProductUpdate = ({ id, setState }: IPropsModalProductUpdate) => {
  const { donations, editQuantity, deleteDonation } =
    useContext(DonationContext);

  const product = donations.find((donation) => id === donation.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductUpdate>();

  const submit = handleSubmit((data: { amounts: number }) => autocloseModal(data))

  const autocloseModal = async (data: { amounts: number }) => {

    const state = await editQuantity({ amounts: data.amounts, id: id })
    setState(state)
  }
  const autocloseModalDelete = async () => {
    const state = await deleteDonation(id)
    setState(state)
  }

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
        onSubmit={submit}
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
          onclick={autocloseModalDelete}
        >
          Deletar
        </Button>
      </form>
    </DonationUpdateStyled >
  );
};
