import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../Button"
import { categories } from "../../CategoriesMenu";
import { Input } from "../Input"
import { InputStyled } from "../Input/styles";
import { AddDonationSchema } from "./AddDonarionSchema";

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

      
    return (
        <>
            <form>
                <Input label={"Titulo"} id={"title"} type={"text"} placeholder={"Digite aqui o titulo"}></Input>
                <select>
                    {categories.map((cat, i) => 
                    <option key={i} value={cat}>{cat}</option>)}
                </select>
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
                <Button size={'lg'} theme={'primary'} type={'submit'}>Adicionar Doação</Button>     
            </form>
        </>
    )
}

/* "userId": 1,
"img": "limào",
"title": "limào",
"category": "Fruits",
"validation": "01/02/23",
"descripition": "Docao de uma remeça de Maça quase vencisdas",
"amounts": "51", */