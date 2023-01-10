import { createContext, useState, useEffect, useContext } from "react";
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
import { FaLessThan } from "react-icons/fa";
import { DonationContext } from "../DonationContext";

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
  const [isDonor, setIsDonor] = useState(false)

  const { getProducts } = useContext(DonationContext)

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

      if (!token && !userID) {
        setLoadingUser(false);
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await api.get(`/users/${userID}`, config)
        setUser(response.data)
        setIsDonor(response.data.donor)
        getProducts()
      }
      catch (error) {
        console.log(error);
        window.localStorage.clear();
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
      const isDonorResponse: any = response.data.user.donor;

      setUser(response.data.user);
      setIsDonor(isDonorResponse)

      window.localStorage.setItem("TOKEN", response.data.accessToken);
      window.localStorage.setItem("USER", response.data.user.id);

      toast.success("Login realizado com sucesso!");
      getProducts()
      setOpenModal(false)

      await isDonor ? navigate("/DashboardDonor") : navigate("/DashboardReceiver");

    } catch (error) {
      toast.error("Ops! Usuário ou Senha inválido!");
      window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  const userRegisterDonor = async (data: iFormRegisterDonor): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");

      modalClose()
      modalLogin()

      // setUser(response.data.user);
      // window.localStorage.setItem("TOKEN", response.data.accessToken);
      // window.localStorage.setItem("USER", response.data.user.id);
      // const typeOfUser = response.data.user.donor
      // typeOfUser ? navigate("/DashboardDonor"): navigate("/DashboardReceiver")
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userRegisterReceiver = async (
    data: iFormRegisterReceiver
  ): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");

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

  const userLogout = () => {
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
        userLogout,
        isDonor,
        setOpenModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
