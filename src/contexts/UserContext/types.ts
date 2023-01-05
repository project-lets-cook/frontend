import React from "react";

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  // confirmPassword: StringSchema;
  businessName: string;
  cnpj: string;
  telephone: string;
  address: string;
  profileImgUrl: string;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  user: iUser | null;
  setUser: (user: iUser | null) => void;

  loading: boolean;
  loadingUser: boolean;

  userLogin: (data: iFormLogin) => Promise<void>;
  userRegister: (data: iFormRegister) => Promise<void>;

  openModal: boolean;
  modalOpen: () => void;
  modalClose: () => void;
  openLogin: boolean; 
  openRegisterReceiver: boolean; 
  openRegisterDonor: boolean;
  modalLogin: () => void; 
  modalRegisterReceiver: () => void; 
  modalRegisterDonor: () => void;
}

export interface iUser {
  id: string;
  name?: string;
  email?: string;
  profileImgUrl?: string;
  telephone?: string;
}

export interface iUserResponse {
  accessToken: string;

  user: iUser;
}
