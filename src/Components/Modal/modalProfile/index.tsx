import { UserContext } from "../../../contexts/UserContext";
import { ModalProfileStyled } from "./modalProfile";
import { useContext } from "react";
import { StyledTypography } from "../../BaseTypography/style";
import { Input } from "../../Forms/Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import { BaseTypography } from "../../BaseTypography";
import { Modal } from "../index";

interface IdataProductUpdate {
  name: string;
  address: {
    city: string;
  };
  profileImgUrl: string;
}

type FormNewAndress = {
  name: string;
  address: {
    city: string;
  };
  profileImgUrl: string;
};

export const ModalProfile = () => {
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNewAndress>();

  const testeModalProfile = (data: IdataProductUpdate) => {
    console.log(data);
  };

  return (
    <Modal name="Perfil">
      <ModalProfileStyled>
        <img src={user?.profileImgUrl} alt={user?.name} />
        <div id="text">
          <span id="nome">{user?.name}</span>
          <span>{user?.email}</span>
          <span>{user?.telephone}</span>
        </div>

        <form onSubmit={handleSubmit(testeModalProfile)}>
          <Input
            label={"Nome"}
            id={"Nome"}
            type={"text"}
            register={register("name")}
            placeholder={"Digite seu novo endereço"}
          />
          <Input
            label={"Cidade"}
            id={"Cidade"}
            type={"text"}
            register={register("address.city")}
            placeholder={"Digite sua cidade"}
          />
          <Input
            label={"Sua imagem"}
            id={"avatar"}
            type={"text"}
            register={register("profileImgUrl")}
            placeholder={"Cole aqui o link do seu avatar"}
          />
          <Button size="lg" theme="primary" type="submit">
            Editar perfil
          </Button>
        </form>
        <Button
          size="lg"
          theme="white"
          type="button"
          onclick={() => setOpenModal(false)}
        >
          Cancelar
        </Button>
      </ModalProfileStyled>
    </Modal>
  );
};
function setOpenModal(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
