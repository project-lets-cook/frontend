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
  profileImgUrl?: string;
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
  request?: iUser[];
}

export interface Ibody {
  userId: string,
  title: string,
  category: string,
  validation: string,
  descripition: string,
  amounts: number,
  address: {
    city: string,
    state: string,
  },
  request: request[]
};

interface request {
  address: {
    street: string,
    city: string,
    state: string
  }
  cpf: string,
  donor: true,
  email: string,
  id: number,
  name: string,
  profileImgUrl: string,
  telephone: string,
}
export interface iPropsState {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iDonationProviderValue {
  donations: iDonation[];
  filteredDonations: iDonation[];
  myDonations: iDonation[];
  filteredMyDonations: iDonation[];
  setFilteredMyDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  setFilteredDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  getDonationbyId: (id: number) => Promise<boolean>;
  donation: iDonationInfo;
  setDonation: React.Dispatch<React.SetStateAction<iDonationInfo>>;
  requestDonation: (id: number) => Promise<boolean>;
  request: Ibody|null;
  sendDonation: () => Promise<boolean>;
  modalLoading: boolean;
  setModalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  createDonation: (data: iDonation) => void;
  editQuantity: (data: { amounts: number; id: number }) => Promise<boolean>;
  deleteDonation: (id: number) => Promise<boolean>;
}
