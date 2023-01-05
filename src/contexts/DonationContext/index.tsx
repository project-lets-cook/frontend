import React, { Children } from "react";
import { createContext, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import {
  iDonation,
  iDonationProviderProps,
  iDonationProviderValue,
} from "./types";

export const DonationContext = createContext({} as iDonationProviderValue);

export const DonationProvider = ({ children }: iDonationProviderProps) => {
  const [donations, setDonations] = useState<iDonation[]>([]);

  return (
    <DonationContext.Provider value={{ donations }}>
      {children}
    </DonationContext.Provider>
  );
};
