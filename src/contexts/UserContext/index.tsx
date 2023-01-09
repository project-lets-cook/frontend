import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserProviderValue,
  iUser,
  iFormLogin,
  iUserResponse,
} from "./types";
import { toast } from "react-toastify";
import { iFormRegisterDonor } from "../../Components/RegisterFormDonor";
import { iFormRegisterReceiver } from "../../Components/RegisterFormReceiver";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegisterReceiver, setOpenRegisterReceiver] = useState(false);
  const [openRegisterDonor, setOpenRegisterDonor] = useState(false);

  const modalLogin = () => {
    setOpenLogin(true);
    modalOpen();
  };

  const modalRegisterReceiver = () => {
    setOpenRegisterReceiver(true);
    modalOpen();
  };

  const modalRegisterDonor = () => {
    setOpenRegisterDonor(true);
    modalOpen();
  };

  const modalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
    setOpenLogin(false);
    setOpenRegisterReceiver(false);
    setOpenRegisterDonor(false);
  };

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

      const response = await api.post<iUserResponse>("login", data);

      const typeOfUser = response.data.user.donor

      setUser(response.data.user);

      window.localStorage.setItem("TOKEN", response.data.accessToken);
      window.localStorage.setItem("USER", response.data.user.id);

      toast.success("Login realizado com sucesso");

      typeOfUser ? navigate("/DashboardDonor"): navigate("/DashboardReceiver")
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const userRegisterDonor = async (data: iFormRegisterDonor): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");
      console.log(response)
      modalClose()
      modalLogin()

      // setUser(response.data.user);
      // window.localStorage.setItem("TOKEN", response.data.accessToken);
      // window.localStorage.setItem("USER", response.data.user.id);
      // const typeOfUser = response.data.user.donor
      // typeOfUser ? navigate("/DashboardDonor"): navigate("/DashboardReceiver")
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userRegisterReceiver = async (data: iFormRegisterReceiver): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");
      
      modalClose()
      modalLogin()
      console.log(response)
      // setUser(response.data.user);
      // window.localStorage.setItem("TOKEN", response.data.accessToken);
      // window.localStorage.setItem("USER", response.data.user.id);
      // const typeOfUser = response.data.user.donor
      // typeOfUser ? navigate("/DashboardDonor"): navigate("/DashboardReceiver")
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null)
    window.localStorage.clear()
    navigate("/") 
  }
  
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegisterDonor,
        user,
        setUser,
        loading,
        loadingUser,
        openModal,
        modalOpen,
        modalClose,
        openLogin,
        openRegisterReceiver,
        openRegisterDonor,
        modalLogin,
        modalRegisterReceiver,
        modalRegisterDonor,
        userRegisterReceiver,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
