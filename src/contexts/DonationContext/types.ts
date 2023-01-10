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
export interface iDonationInfo {
  userId?: number
  title?: string
  category?: string
  validation?: string
  descripition?: string
  amounts?: string
  id?: number
}

export interface iDonationProviderValue {
  donations: iDonation[];
  donationInfo: iDonationInfo[];
  filteredDonations: iDonation[];

  setFilteredDonations: React.Dispatch<React.SetStateAction<iDonation[]>>;
  getDonationbyId: (id: number) => void
}
