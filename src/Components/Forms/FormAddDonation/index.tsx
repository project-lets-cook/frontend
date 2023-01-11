import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { acronymStates } from "../../../data/stateList";
import { Button } from "../../Button"
import { categories } from "../../CategoriesMenu";
import { Input } from "../Input"
import { InputStyled } from "../Input/styles";
import { AddDonationSchema } from "./AddDonarionSchema";
import { InputLocations, SelectCategory } from "./styled";

interface iFormAddDonation {
   userId: number
   img: string
   title: string
   category: string
   validation: string
   descripition: string
   amounts: number}
    type FormAddDonation = {
   title: string
   category: string
   validation: string
   descripition: string
   amounts: number
   }

export const AddDonarionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormAddDonation>({
        mode: "onBlur",
        resolver: yupResolver(AddDonationSchema),
      });

    const submit = (data: any) => {
      console.log(data)
    }
    return (
            <form onSubmit={handleSubmit(submit)}>
                <Input label={"Titulo"} id={"title"} type={"text"} placeholder={"Digite aqui o titulo"}></Input>
                <SelectCategory id="categorys">
                    {categories.map((cat, i) => 
                    <option key={i} value={cat}>{cat}</option>)}
                </SelectCategory>
                <Input label={"Validade"} id={"validation"} type={"text"} placeholder={"Digite aqui a validade"}></Input>
                <InputStyled>
        <textarea
          id='descripition'
          placeholder='Digite aqui a descriçãodo produto'
          {...register}
          required
        />
        <label htmlFor='descripiton'>Descrição</label>
      </InputStyled>
                <Input label={"Quantidade"} id={"amounts"} type={"number"} placeholder={"Digite aqui a quantidade"}></Input>
                <InputLocations>
                  <Input label={"Endereço"} id={"city"} placeholder={"Sua Cidade"}></Input>
                  <select name="State" id="state">
                    {acronymStates.map((ele, i) => {
                     return <option key={i} value={ele}>{ele}</option>
                    })}
                  </select>
                </InputLocations>

                <Button size={'lg'} theme={'primary'} type={'submit'}>Adicionar Doação</Button>     
            </form>
    )
}

/* 	"userId": 1,
	"title": "limào",
	"category": "Fruits",
	"validation": "01/02/23",
	"descripition": "Docao de uma remeça de Maça quase vencisdas",
	"amounts": "51",
	"address": {
		"city": "cidade",
		"state": "estado", */
