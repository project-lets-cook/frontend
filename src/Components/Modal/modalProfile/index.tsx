import { UserContext } from "../../../contexts/UserContext";
import { ModalProfileStyled } from "./modalProfile";
import { useContext } from "react";
import { StyledTypography } from "../../BaseTypography/style";
import { Input } from "../../Forms/Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import { BaseTypography } from "../../BaseTypography";

interface IdataNewAndress {
  address: string;
}

type FormNewAndress = {
  address: string;
};

export const ModalProfileReceptor = () => {
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNewAndress>();

  const testeModalProfile = (data: IdataNewAndress) => {
    console.log(data);
  };

  return (
    <ModalProfileStyled>
      <img src={user?.profileImgUrl} alt={user?.name} />
      <div id="text">
        <span id="nome">Nome</span>
        <span>email@mail.com</span>
        <span>xx xxxxx - xxxx</span>
      </div>

      <form onSubmit={handleSubmit(testeModalProfile)}>
        <Input
          label={"Cidade"}
          id={"cidade"}
          type={"text"}
          register={register("address")}
          placeholder={"Digite seu novo endereço"}
        />
        <Button size="lg" theme="primary" type="submit">
          Alterar endereço
        </Button>
      </form>
      <Button size="lg" theme="white" type="button">
        Cancelar
      </Button>
    </ModalProfileStyled>
  );
};
