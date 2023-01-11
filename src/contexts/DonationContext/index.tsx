import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext, UserProvider } from "../UserContext";
import { iUser } from "../UserContext/types";
import {
  iDonation,
  iDonationInfo,
  iDonationProviderProps,
  iDonationProviderValue,
  iReciver,
} from "./types";

export const DonationContext = createContext({} as iDonationProviderValue);

export const DonationProvider = ({ children }: iDonationProviderProps) => {
  const [donations, setDonations] = useState<iDonation[]>([]);
  const [filteredDonations, setFilteredDonations] = useState<iDonation[]>([]);
  const [donation, setDonation] = useState<iDonationInfo>({} as iDonationInfo)
  const [requests, setRequests] = useState([] as iUser[])
  const [myDonations, setMyDonations] = useState<iDonation[]>([]);
  const [filteredMyDonations, setFilteredMyDonations] = useState<iDonation[]>(
    []
  );
  const { user, setOpenModal, modalClose } = useContext(UserContext);

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
    const token = localStorage.getItem("TOKEN");

    if (!token) {
      return null;
    }
    try {
      const { data } = await api.get(`donation/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setRequests(data.request)
      setDonation(data)
      setOpenModal(true)
    } catch (error) {
      console.error(error);
    }
  };

  const requestDonation = async (id: number) => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      return null;
    }
    try {
      await api.patch(`donation/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: [
          {
            requests: user,
          },
        ],
      });
      toast.success("Sua Solicitação foi enviada!");
      modalClose()
    } catch (error) {
      console.error(error);
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
      sendDonation
    }}>
      {children}
    </DonationContext.Provider>
  );
};
