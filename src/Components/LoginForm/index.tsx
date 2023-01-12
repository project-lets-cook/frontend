import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Forms/Input";
import { InputPassword } from "../Forms/InputPassword";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loader } from "../Loader";
import { iPropsState } from "../../contexts/DonationContext/types";
import { schemaLogin } from "./schemaLogin";

export interface iFormLogin {
  email: string;
  password: string;
}

type FormLogin = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { userLogin, loading } = useContext(UserContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

  const login = (data: iFormLogin) => {
    userLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(login)} noValidate>
      <div>
        <Input
          label={"E-mail"}
          id={"email"}
          type={"text"}
          register={register("email")}
          placeholder={"Digite seu email aqui"}
        />
        {errors.email?.message ? <p>{errors.email.message}</p> : <p></p>}
      </div>

      <div>
        <InputPassword
          label={"Senha"}
          id={"password"}
          register={register("password")}
          placeholder={"Digite sua senha aqui"}
        />
        {errors.password?.message ? <p>{errors.password.message}</p> : <p></p>}
      </div>

      <Button size="lg" theme="primary" type="submit" disabled={loading}>
        {!loading ? "Entrar" : <Loader />}
      </Button>
    </form>
  );
};
