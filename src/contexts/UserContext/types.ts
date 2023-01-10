import React from "react";
import { iFormRegisterDonor } from "../../Components/RegisterFormDonor";
import { iFormRegisterReceiver } from "../../Components/RegisterFormReceiver";

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iEditAdrress {
  address: string;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  user: iUser | null;
  typeUser: boolean;
  setUser: (user: iUser | null) => void;

  loading: boolean;
  loadingUser: boolean;

  userLogin: (data: iFormLogin) => Promise<void>;
  userRegisterDonor: (data: iFormRegisterDonor) => Promise<void>;
  userRegisterReceiver: (data: iFormRegisterReceiver) => Promise<void>;
  editAdress: (data: iEditAdrress) => Promise<void>;

  openModal: boolean;
  modalOpen: () => void;
  modalClose: () => void;
  openLogin: boolean;
  openRegisterReceiver: boolean;
  openRegisterDonor: boolean;
  modalLogin: () => void;
  modalRegisterReceiver: () => void;
  modalRegisterDonor: () => void;
  userLogout: () => void;
}

export interface iUser {
  id: string;
  name?: string;
  email?: string;
  profileImgUrl?: string;
  telephone?: string;
  donor?: boolean;
}

export interface iUserResponse {
  accessToken: string;

  user: iUser;
  donor: boolean;
}
