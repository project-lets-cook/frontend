import { SetStateAction } from "react";
import React from "react";

export interface iDonationProviderProps {
  children: React.ReactNode;
}

export interface iDonation {
  userId: string;
  img: string;
  title: string;
  category: string;
  validation: string;
  description: string;
  amounts: number;
  address: string;
  id: string;
}

export interface iDonationProviderValue {
  donations: iDonation[];
  filteredDonations: iDonation[];

  setFilteredDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
}
