import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledSheradItens } from "./style";
import { BiSearch } from "react-icons/bi";
import { StepsCarousel } from "../StepsCarousel";

export function SheradItens() {
  const [focus, setFocus] = useState(false);
  // const { register, handleSubmit } = useForm()

  return (
    <>
      <StyledSheradItens focus={focus}>
        {/* <div> */}
        {/* <StepsCarousel /> */}
        {/* </div> */}
        <button>
          <BiSearch />
        </button>
        <input
          required
          placeholder="Digitar Pesquisa"
          // {...register("sherad")}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
        />
      </StyledSheradItens>
    </>
  );
}
