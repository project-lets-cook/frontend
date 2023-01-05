
import { useState } from "react";
import { useForm } from "react-hook-form"
import { StyledSheradItens } from "./style";

export function SheradItens() {
  const [focus, setFocus] = useState(false);
  // const { register, handleSubmit } = useForm()

  return (
    <StyledSheradItens focus={focus}  >
      <input
        required
        placeholder="Digitar Pesquisa"
        // {...register("sherad")}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
      />
      <button></button>
    </StyledSheradItens>
  );
}
