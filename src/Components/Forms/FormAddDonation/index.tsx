import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DonationContext } from "../../../contexts/DonationContext";
import { iPropsState } from "../../../contexts/DonationContext/types";
import { acronymStates } from "../../../data/stateList";
import { Button } from "../../Button"
import { categories } from "../../CategoriesMenu";
import { Input } from "../Input"
import { InputStyled } from "../Input/styles";
import { AddDonationSchema } from "./AddDonarionSchema";
import { DivAddDonation, FomrAddDonation, InputLocations, SelectCategory } from "./styled";


type iFormAddDonation = {
  title: string
  category: string
  validation: string
  descripition: string
  amounts: number
  city: string
  state: string
}

export const AddDonarionForm = ({setState}: iPropsState) => {
  const { createDonation } = useContext(DonationContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormAddDonation>({
    mode: "onBlur",
    resolver: yupResolver(AddDonationSchema),
  });

  const submit = (data: any) => {
    createDonation(data)
    setState(!true)
  }
  return (
    <DivAddDonation>
      <FomrAddDonation onSubmit={handleSubmit(submit)}>
      <Input label={"Titulo"} id={"title"} type={"text"} placeholder={"Digite aqui o titulo"} register={register("title")}></Input>
      <SelectCategory id="category" {...register("category")}> 
        {categories.map((cat, i) =>
          <option key={i} value={cat}>{cat}</option>)}
      </SelectCategory>
      <Input label={"Validade"} id={"validation"} type={"text"} placeholder={"Digite aqui a validade"} register={register("validation")}></Input>
      <InputStyled>
        <textarea
          {...register("descripition")}
          id="descripition"
          placeholder="Digite aqui a descriçãodo produto"
        ></textarea>
      </InputStyled>
      <Input label={"Quantidade"} id={"amounts"} type={"text"} placeholder={"Digite aqui a quantidade"} register={register("amounts")}></Input>
      <InputLocations>
        <Input label={"Cidade"} id={"city"} placeholder={"Sua Cidade"} register={register("city")}></Input>
        <select id="state" {...register("state")}>
          {acronymStates.map((ele, i) => {
            return <option key={i} value={ele}>{ele}</option>
          })}
        </select>
      </InputLocations>

      <Button size={"lg"} theme={"primary"} type={"submit"}>Adicionar Doação</Button>
    </FomrAddDonation>
    </DivAddDonation>
  )
}