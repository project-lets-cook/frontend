import { useContext, useState } from "react";
import { StyledSearchItens } from "./style";
import { BiSearch } from "react-icons/bi";
import { DonationContext } from "../../contexts/DonationContext";
import { SelectCity } from "../Forms/Select";

export function SearchItens() {
  const [focus, setFocus] = useState(false);
  const { donations, setFilteredDonations } = useContext(DonationContext);

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
    <StyledSearchItens focus={focus} onSubmit={() => searchProducts(event)}>
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
      <SelectCity />
    </StyledSearchItens>
  );
}
