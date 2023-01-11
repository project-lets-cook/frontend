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
export interface iUserProviderValue {
  user: iUser | null;
  isDonor: boolean;
  setUser: (user: iUser | null) => void;
  loading: boolean;
  loadingUser: boolean;
  userLogin: (data: iFormLogin) => Promise<void>;
  userRegisterDonor: (data: iFormRegisterDonor) => Promise<boolean>;
  userRegisterReceiver: (data: iFormRegisterReceiver) => Promise<boolean>;
  editAdress: (data: iEditAdrress) => Promise<void>;
  userLogout: () => void;
}


