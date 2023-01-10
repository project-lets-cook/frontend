import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledSheradItens } from "./style";
import { BiSearch } from "react-icons/bi";
import { StepsCarousel } from "../StepsCarousel";
import { aliments } from "../../services/base";
import { IElement } from "../CardDonor";
import { DonationContext } from "../../contexts/DonationContext";

export function SheradItens() {
  const [focus, setFocus] = useState(false);
  const { donations, filteredDonations, setFilteredDonations } = useContext(DonationContext);

  interface iTarget {
    target: [{ value: string }, { value: string }];
    preventDefault: () => void;
  }

  const searchProducts = (event: Event | undefined) => {
    const e = event as unknown as iTarget;
    e.preventDefault();
    const search: string = e?.target[1]?.value;
    const filterDonations = donations.filter((p) => {
      return p.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredDonations(filterDonations);
  };

  return (
    <>
      <StyledSheradItens focus={focus} onSubmit={() => searchProducts(event)}>
        {/* <div> */}
        {/* <StepsCarousel /> */}
        {/* </div> */}
        <button type="submit">
          <BiSearch />
        </button>
        <input
          type="text"
          // required
          placeholder="Digitar Pesquisa"
          // {...register("sherad")}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
        />
      </StyledSheradItens>
    </>
  );
}
