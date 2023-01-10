import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { DonationContext } from "../../../contexts/DonationContext"
import { SelectCityStyled } from "./styled"

export interface iLocationForm {
    locations: string
  }

export const SelectCity = () => {

    const { donations, setFilteredDonations, reRender, setReRender } = useContext(DonationContext)

    const { register, handleSubmit } = useForm<iLocationForm>({
        mode: 'onChange',
    })

    const submit: SubmitHandler<iLocationForm> = (data) => {
        if (data.locations === 'all') {
            setFilteredDonations(donations)
        } else {
        setFilteredDonations(donations.filter((donation) => donation.title === data.locations))
        }
    }


    return (
        <SelectCityStyled onChange={handleSubmit(submit)}>
            <select id="locations" {...register('locations')}>
                <option hidden>Escolher Cidade</option>
                <option value="all">Todas</option>
                {donations.map((donation, i) =>
                    <option key={i} value={donation.title}>{donation.title}</option>
                )}
            </select>
        </SelectCityStyled>
    )

}