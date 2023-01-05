import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import {
  iUserProviderProps,
  iUserProviderValue,
  iUser,
  iFormLogin,
  iFormRegister,
  iUserResponse,
} from "./types";
import { toast } from "react-toastify";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);

  const userLogin = async (data: iFormLogin): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("/login", data);

      setUser(response.data.user);

      window.localStorage.setItem("TOKEN", response.data.accessToken);
      window.localStorage.setItem("USER", response.data.user.id);

      toast.success("Login realizado com sucesso");

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: iFormRegister): Promise<void> => {
    try {
      setLoading(true);

      await api.post<iUserResponse>("/register", data);

      toast.success("Conta criada com sucesso!");

      //   navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, user, setUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
