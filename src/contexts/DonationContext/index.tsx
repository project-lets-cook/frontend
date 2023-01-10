import React, { Children, useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";
import {
  iDonation,
  iDonationInfo,
  iDonationProviderProps,
  iDonationProviderValue,
} from "./types";

export const DonationContext = createContext({} as iDonationProviderValue);

export const DonationProvider = ({ children }: iDonationProviderProps) => {
  const [donations, setDonations] = useState<iDonation[]>([]);
  const [filteredDonations, setFilteredDonations ] = useState<iDonation[]>([]);
  const [donationInfo, setInfoDonation] = useState<iDonationInfo[]>([])
  const {user, setOpenModal} = useContext(UserContext)

  useEffect(() => {

      const getProducts = async () => {
          const token = localStorage.getItem("TOKEN");
          
          if (!token) {
              return null
          }
          try {
              const { data } = await api.get('donation/', {
                  headers: {
                      authorization: `Bearer ${token}`
                  }
              })

              setDonations(data)
              setFilteredDonations(data)
          } catch (error) {
              console.error(error)
          }
      }
      getProducts()
  }, [])

  const getDonationbyId = async (id: number) => {
    const token = localStorage.getItem("TOKEN");
    
    if (!token) {
        return null
    }
    try {
        const { data } = await api.get(`donation/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        setInfoDonation(data)
        setOpenModal(true)
    } catch (error) {
        console.error(error)
    }
}
  
  return (
    <DonationContext.Provider value={{ 
     donations,
     filteredDonations,
     setFilteredDonations,
     getDonationbyId,
     donationInfo
     }}>
      {children}
    </DonationContext.Provider>
  );
};
