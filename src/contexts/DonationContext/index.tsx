import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";
import { iUser } from "../UserContext/types";
import {
  iDonation,
  iDonationInfo,
  iDonationProviderProps,
  iDonationProviderValue,
} from "./types";

export const DonationContext = createContext({} as iDonationProviderValue);

export const DonationProvider = ({ children }: iDonationProviderProps) => {
  const [donations, setDonations] = useState<iDonation[]>([]);
  const [modalLoading, setModalLoading] = useState(false);
  const [filteredDonations, setFilteredDonations] = useState<iDonation[]>([]);
  const [donation, setDonation] = useState<iDonationInfo>({} as iDonationInfo)
  const [requests, setRequests] = useState([] as iUser[])
  const [myDonations, setMyDonations] = useState<iDonation[]>([]);
  const [filteredMyDonations, setFilteredMyDonations] = useState<iDonation[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("TOKEN");

      if (!token) {
        return null;
      }
      try {
        const { data } = await api.get("donation/", {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        setDonations(data)
        setFilteredDonations(data)
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
    const getMyDonations = async () => {
      const token = localStorage.getItem("TOKEN");
      const userId = localStorage.getItem("USER");
      if (!token) {
        return null;
      }

      try {
        const { data } = await api.get(`donation?userId=${userId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setMyDonations(data);
        setFilteredMyDonations(data);
      } catch (error) {
        console.error(error);
      }
    };
    getMyDonations();
  }, [user]);
  const getDonationbyId = async (id: number) => {
    
    setModalLoading(true)
    console.log(modalLoading);

    const token = localStorage.getItem("TOKEN");
    
    if (!token) {
      return false;
    }
    try {
      const { data } = await api.get(`donation/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setRequests(data.request)
      setDonation(data)
      return true
    } catch (error) {
      console.error(error);
      toast.error("algo errado aqui")
      return false
    }
    finally {
      setModalLoading(false)
    }
  };

  const requestDonation = async (id: number) => {
    const token = localStorage.getItem("TOKEN");
    const body = [...requests, user];
    if (!token) {
      return false;
    }
    try {
      await api.patch(`donation/${id}`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },

      });
      toast.success("Sua Solicitação foi enviada!");
      return false
    } catch (error) {
      console.error(error);
      return true
    }
  };


  const sendDonation = async () => {
    const token = window.localStorage.getItem("TOKEN");
    const id = donation.id
    try {
      await api.delete(`donation/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        }
      })
      toast.success("Sua Doaçao foi doada ");
    } catch (error) {
      console.log(error);
      toast.error("Algo errado por aqui")
    }

  }
  const createDonation = async (data: iDonation) => {
    const token = localStorage.getItem("TOKEN");
    const userId = localStorage.getItem("USER");
    const body = {
      userId: userId,
      title: data.title,
      category: data.category,
      validation: data.validation,
      description: data.descripition,
      amounts: data.amounts,
      address: {
        city: data.address.city,
        state: data.address.state,
      },
    }
    if (!token) {
      return null;
    } 

    try {
      await api.post('donation/', JSON.stringify(body), {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Doação adicionada com sucesso!");
    } catch (error) {
      console.error(error)
      toast.error("algo deu errado tente novamente!");
    }
  }
 
  return (
    <DonationContext.Provider value={{
      donations,
      filteredDonations,
      setFilteredDonations,
      getDonationbyId,
      donation,
      setDonation,
      requestDonation,
      myDonations,
      filteredMyDonations,
      setFilteredMyDonations,
      requests,
      sendDonation,
      modalLoading,
      setModalLoading,
      createDonation
    }}>
      {children}
    </DonationContext.Provider>
  );
};
