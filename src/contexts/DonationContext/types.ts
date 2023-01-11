import React from "react";
import { iUser } from "../UserContext/types";

export interface iDonationProviderProps {
  children: React.ReactNode;
}

export interface iDonation {
  userId: number;
  title: string;
  category: string;
  validation: string;
  descripition: string;
  amounts: number;
  id: number;
  address: {
    city: string;
    state: string;
  };
}

export interface iReciver {
  userId?: number;
  img?: string;
  name?: string;
}

export interface iDonationInfo {
  userId: number;
  title?: string;
  category?: string;
  validation?: string;
  descripition?: string;
  amounts?: string;
  id: number;
  request?: iUser[]
}

export interface iDonationProviderValue {
  donations: iDonation[];
  filteredDonations: iDonation[];
  myDonations: iDonation[];
  filteredMyDonations: iDonation[];
  setFilteredMyDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  setFilteredDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  getDonationbyId: (id: number) => void;
  donation: iDonationInfo
  setDonation: React.Dispatch<React.SetStateAction<iDonationInfo>>
  requestDonation: (id: number) => void;
  requests: iUser[]
  modalLoading: boolean;
  createDonation: (data: iDonation) => void;
}
