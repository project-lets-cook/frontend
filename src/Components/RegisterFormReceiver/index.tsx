
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Forms/Input";
import { InputPassword } from "../Forms/InputPassword";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loader } from "../Loader";
import { iPropsState } from "../../contexts/DonationContext/types";
import { registerFormReciver } from "./registerFormReciver";

export interface iFormRegisterReceiver {
  company: string;
  cnpj: string;
  telephone: string;
  place: string;
  sponsor: string;
  picture: string;
  email: string;
  password: string;
  confirm: string;
  city: string;
  country: string;
  donor: boolean;
}

export const RegisterFormReceiver = ({ setState }: iPropsState) => {
  const { userRegisterReceiver, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterReceiver>({
    mode: "onBlur",
    resolver: yupResolver(registerFormReciver),
    defaultValues: {
      donor: false,
    },
  });

  const submitRegisterReceiver = async (data: iFormRegisterReceiver) => {
    const state = await userRegisterReceiver(data);
    setState(state)
  };

  return (
    <form onSubmit={handleSubmit(submitRegisterReceiver)} noValidate>
      <div>
        <Input
          label={"Razão Social"}
          id={"company"}
          type={"text"}
          register={register("company")}
          placeholder={"Digite seu nome aqui"}
        />
        {errors.company?.message ? (
          <p className="input-waring">{errors.company.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"CNPJ"}
          id={"cnpj"}
          type={"text"}
          register={register("cnpj")}
          placeholder={"Digite seu CNPJ aqui"}
        />
        {errors.cnpj?.message ? (
          <p className="input-waring">{errors.cnpj.message}</p>
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
          register={register("place")}
          placeholder={"Digite seu endereço aqui"}
        />
        {errors.place?.message ? (
          <p className="input-waring">{errors.place.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Pessoa Responsável"}
          id={"sponsor"}
          type={"text"}
          register={register("sponsor")}
          placeholder={"Digite o nome do responsável aqui"}
        />
        {errors.sponsor?.message ? (
          <p className="input-waring">{errors.sponsor.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <Input
          label={"Foto do perfil"}
          id={"picture"}
          type={"text"}
          register={register("picture")}
          placeholder={"Digite o link de sua foto"}
        />
        {errors.picture?.message ? (
          <p className="input-waring">{errors.picture.message}</p>
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
          register={register("confirm")}
          placeholder={"Digite novamente sua senha aqui"}
        />
        {errors.confirm?.message ? (
          <p className="input-waring">{errors.confirm.message}</p>
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
          register={register("country")}
          placeholder={"Digite seu estado aqui"}
        />
        {errors.country?.message ? (
          <p className="input-waring">{errors.country.message}</p>
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
