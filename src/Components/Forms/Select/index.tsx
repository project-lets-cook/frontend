import { useContext, useState } from "react";
import { DonationContext } from "../../../contexts/DonationContext";
import { SelectCityStyled } from "./styled";

export interface iLocationForm {
  locations: string;
}

export const SelectCity = () => {
  const { donations, setFilteredDonations } = useContext(DonationContext);
  const cities = [...new Set(donations.map((ele) => ele.address.city))]
  
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
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </select>
    </SelectCityStyled>
  );
};
