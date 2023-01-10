import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DonationContext } from "../../../contexts/DonationContext";
import { SelectCityStyled } from "./styled";

export interface iLocationForm {
  locations: string;
}

export const SelectCity = () => {
  const { donations, setFilteredDonations } = useContext(DonationContext);

  const changeCity = (city: string) => {
    if (city === "all") {
      setFilteredDonations(donations);
    } else {
      setFilteredDonations(
        donations.filter((donation) => donation.address.city === city)
      );
    }
  };

  return (
    <SelectCityStyled>
      <select
        id="locations"
        onChange={(event) => changeCity(event.target.value)}
      >
        <option hidden>Escolher Cidade</option>
        <option value="all">Todas</option>
        {donations.map((donation, i) => (
          <option key={i} value={donation.address.city}>
            {donation.address.city}
          </option>
        ))}
      </select>
    </SelectCityStyled>
  );
};
