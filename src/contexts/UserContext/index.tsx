import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
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
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("TOKEN");
      const userID = localStorage.getItem("USER");

      if (!token || !userID) {
        setLoadingUser(false);
        return null;
      }

      try {
        await api.get("http://localhost:3001/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        setLoadingUser(false);
        setUser({ id: userID });
        navigate("/ProfilePage");
      } catch (error) {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USER");
        navigate("/");
      } finally {
        setLoadingUser(false);
      }
    }
    loadUser();
  }, []);

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
      value={{ userLogin, userRegister, user, setUser, loading, loadingUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
