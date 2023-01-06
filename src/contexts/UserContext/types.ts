import React from "react";
import { iFormRegister } from "../../Components/RegisterFormDonor";

export interface iFormLogin {
  email: string;
  password: string;
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
  donor?: boolean;
}

export interface iUserResponse {
  accessToken: string;

  user: iUser;
}
