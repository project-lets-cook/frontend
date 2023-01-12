import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Forms/Input";
import { InputPassword } from "../Forms/InputPassword";
import { Button } from "../Button";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { StringSchema } from "yup";
import { Loader } from "../Loader";
import { State } from "react-alice-carousel";
import { iPropsState } from "../../contexts/DonationContext/types";
import { schemaRegisterDonorForm } from "./schemaRegisterDonorForm";

export interface iFormRegisterDonor {
  name: string;
  email: string;
  password: string;
  confirmPassword: StringSchema;
  businessName: string;
  cpf: string;
  street: string;
  telephone: string;
  profileImgUrl: string;
  city: string;
  state: string;
  donor: boolean;
}

export const RegisterFormDonor = ({ setState }: iPropsState) => {
  const { userRegisterDonor, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterDonor>({
    mode: "onBlur",
    resolver: yupResolver(schemaRegisterDonorForm),
    defaultValues: {
      donor: true,
    },
  });

  const submitRegisterDonor = async (data: iFormRegisterDonor) => {
    const state = await userRegisterDonor(data);
    setState(state);
  };

  return (
    <form onSubmit={handleSubmit(submitRegisterDonor)} noValidate>
      <div>
        <Input
          label={"Nome"}
          id={"name"}
          type={"text"}
          register={register("name")}
          placeholder={"Digite seu nome aqui"}
        />
        {errors.name?.message ? (
          <p className="input-waring">{errors.name.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Telefone"}
          id={"telephone"}
          type={"text"}
          register={register("telephone")}
          placeholder={"Digite seu telefone aqui"}
        />
        {errors.telephone?.message ? (
          <p className="input-waring">{errors.telephone.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Endereço"}
          id={"place"}
          type={"text"}
          register={register("street")}
          placeholder={"Digite seu endereço aqui"}
        />
        {errors.street?.message ? (
          <p className="input-waring">{errors.street.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"CPF / CNPJ"}
          id={"document"}
          type={"text"}
          register={register("cpf")}
          placeholder={"Digite seu CPF aqui"}
        />
        {errors.cpf?.message ? (
          <p className="input-waring">{errors.cpf.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Foto do perfil"}
          id={"picture"}
          type={"text"}
          register={register("profileImgUrl")}
          placeholder={"Digite o link de sua foto"}
        />
        {errors.profileImgUrl?.message ? (
          <p className="input-waring">{errors.profileImgUrl.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"E-mail"}
          id={"email"}
          type={"text"}
          register={register("email")}
          placeholder={"Digite seu email aqui"}
        />
        {errors.email?.message ? (
          <p className="input-waring">{errors.email.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <InputPassword
          label={"Senha"}
          id={"password"}
          register={register("password")}
          placeholder={"Digite sua senha aqui"}
        />
        {errors.password?.message ? (
          <p className="input-waring">{errors.password.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <InputPassword
          label={"Repetir senha"}
          id={"confirm"}
          register={register("confirmPassword")}
          placeholder={"Digite novamente sua senha aqui"}
        />
        {errors.confirmPassword?.message ? (
          <p className="input-waring">{errors.confirmPassword.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Cidade"}
          id={"city"}
          type={"text"}
          register={register("city")}
          placeholder={"Digite sua cidade aqui"}
        />
        {errors.city?.message ? (
          <p className="input-waring">{errors.city.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Estado"}
          id={"country"}
          type={"text"}
          register={register("state")}
          placeholder={"Digite seu estado aqui"}
        />
        {errors.state?.message ? (
          <p className="input-waring">{errors.state.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <Button size="lg" theme="primary" type="submit" disabled={loading}>
        {!loading ? "Cadastrar" : <Loader />}
      </Button>
    </form>
  );
};
