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
  id?: number 
}
export const ModalProductUpdate = ({ id }: IPropsModalProductUpdate ) => {
  const { donations } = useContext(DonationContext);

  const product = donations.find((donation) => id === donation.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductUpdate>();

  const testeModalProductUpdate = (data: IdataProductUpdate) => {
    console.log(data);
  };

  return (
    <DonationUpdateStyled>
      <div>
        <div>
          <span id="titleDescription">Alimento:</span>
          <span>{product?.title}</span>
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
          <span id="titleDescription">Descrição:</span>
          <span>{product?.descripition}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(testeModalProductUpdate)}>
        <Input
          label={"Quantidade"}
          id={"amounts"}
          type={"number"}
          placeholder={"Digite aqui a quantidade"}
          register={register("amounts")}
        ></Input>
        <Button size={"lg"} theme={"primary"} type={"submit"}>
          Atualizar Doação
        </Button>
        <Button size={"lg"} theme={"white"} type={"submit"}>
          Deletar
        </Button>
      </form>
    </DonationUpdateStyled>
  );
};
