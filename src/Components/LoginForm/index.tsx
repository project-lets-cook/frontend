import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Forms/Input";
import { InputPassword } from "../Forms/InputPassword";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { StyledLoginForm } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface iFormLogin {
  email: string;
  password: string;
}

type FormLogin = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const validate = yup.object().shape({
    email: yup.string().required("O email é obrigatório"),

    password: yup.string().required("A senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ resolver: yupResolver(validate) });

  const teste = (data: iFormLogin) => {
    userLogin(data);
    console.log(data);
  };

  return (
    <StyledLoginForm>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(teste)}>
        <div>
          <Input
            label={"E-mail"}
            id={"email"}
            type={"email"}
            register={register("email")}
            placeholder={"Digite seu email aqui"}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div>
          <InputPassword
            label={"Senha"}
            id={"password"}
            register={register("password")}
            placeholder={"Digite sua senha aqui"}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>

        <Button size="lg" theme="primary" type="submit">
          Entrar
        </Button>
      </form>
    </StyledLoginForm>
  );
};
