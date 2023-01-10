import { SetStateAction } from "react";
import React from "react";

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
export interface iDonationInfo {
  userId?: number;
  title?: string;
  category?: string;
  validation?: string;
  descripition?: string;
  amounts?: string;
  id?: number;
}

export interface iDonationProviderValue {
  donations: iDonation[];
  donationInfo: iDonationInfo[];
  filteredDonations: iDonation[];
  setFilteredDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  getDonationbyId: (id: number) => void;
  getDonationForDonor: (id: number) => void;
}