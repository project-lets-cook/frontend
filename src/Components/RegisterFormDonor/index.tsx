import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Forms/Input";
import { InputPassword } from "../Forms/InputPassword";
import { Button } from "../Button";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { StringSchema } from "yup";

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

export const RegisterFormDonor = () => {
  const { userRegisterDonor, loading } = useContext(UserContext);

  const validate = yup.object().shape({
    name: yup
      .string()
      .required("O nome é obrigatório")
      .min(3, "O nome precisa ter mais que 2 caracteres")
      .max(100, "O nome pode ter até 100 caracteres"),

    telephone: yup.string().required("O telefone é obrigatório"),

    street: yup.string().required("O endereço é obrigatório"),

    cpf: yup
      .string()
      .required("O campo é obrigatório")
      .min(11, "O campo precisa ter 11 caracteres")
      .max(11, "O campo precisa ter 11 caracteres"),

    profileImgUrl: yup.string().required("O campo é obrigatório"),

    email: yup
      .string()
      .required("O email é obrigatório")
      .email("É necessário fornecer um email"),

    password: yup
      .string()
      .required("A senha é obrigatória")
      .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

    confirmPassword: yup
      .string()
      .required("É necessário confirmar sua senha")
      .oneOf([yup.ref("password")], "As senhas não coincidem"),

    city: yup.string().required("A cidade é obrigatório"),

    state: yup.string().required("O estado é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterDonor>({
    resolver: yupResolver(validate),
    defaultValues: {
      donor: true
    },
  });

  const submitRegisterDonor = (data: iFormRegisterDonor) => {
    userRegisterDonor(data);
  };

  return (
    <form onSubmit={handleSubmit(submitRegisterDonor)}>
      <div>
        <Input
          label={"Nome"}
          id={"name"}
          type={"text"}
          register={register("name")}
          placeholder={"Digite seu nome aqui"}
        />
        {errors.name?.message && (
          <p className="input-waring">{errors.name.message}</p>
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
        {errors.telephone?.message && (
          <p className="input-waring">{errors.telephone.message}</p>
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
        {errors.street?.message && (
          <p className="input-waring">{errors.street.message}</p>
        )}
      </div>

      <div>
        <Input
          label={"CPF"}
          id={"document"}
          type={"text"}
          register={register("cpf")}
          placeholder={"Digite seu CPF aqui"}
        />
        {errors.cpf?.message && (
          <p className="input-waring">{errors.cpf.message}</p>
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
        {errors.profileImgUrl?.message && (
          <p className="input-waring">{errors.profileImgUrl.message}</p>
        )}
      </div>

      <div>
        <Input
          label={"E-mail"}
          id={"email"}
          type={"email"}
          register={register("email")}
          placeholder={"Digite seu email aqui"}
        />
        {errors.email?.message && (
          <p className="input-waring">{errors.email.message}</p>
        )}
      </div>

      <div>
        <InputPassword
          label={"Senha"}
          id={"password"}
          register={register("password")}
          placeholder={"Digite sua senha aqui"}
        />
        {errors.password?.message && (
          <p className="input-waring">{errors.password.message}</p>
        )}
      </div>

      <div>
        <InputPassword
          label={"Repetir senha"}
          id={"confirm"}
          register={register("confirmPassword")}
          placeholder={"Digite novamente sua senha aqui"}
        />
        {errors.confirmPassword?.message && (
          <p className="input-waring">{errors.confirmPassword.message}</p>
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
        {errors.city?.message && (
          <p className="input-waring">{errors.city.message}</p>
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
        {errors.state?.message && (
          <p className="input-waring">{errors.state.message}</p>
        )}
      </div>

      <Button size="sm" theme="primary" type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};
