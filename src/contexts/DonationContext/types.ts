import { SetStateAction } from "react";
import React from "react";

export interface iDonationProviderProps {
  children: React.ReactNode;
}

export interface iDonation {
  userId: number;
  img: string;
  title: string;
  category: string;
  validation: string;
  description: string;
  amounts: string;
  address: string;
  id: number;
}

export interface iDonationProviderValue {
  donations: iDonation[];
}
