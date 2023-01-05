import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Forms/Input"
import { InputPassword } from "../Forms/InputPassword"
import { Button } from "../Button"

interface IdataRegisterDonor {
    name: string;
    telephone: string;
    place: string;
    document: string;
    picture: string;
    email: string;
    password: string;
    confirm: string;
    city: string;
    country: string;
}

type FormRegisterDonor = {
    name: string;
    telephone: string;
    place: string;
    document: string;
    picture: string;
    email: string;
    password: string;
    confirm: string;
    city: string;
    country: string;
}

export const RegisterFormDonor = () => {

    const validate = yup.object().shape({
        name: yup.string().required("O nome é obrigatório")
        .min(3, "O nome precisa ter mais que 2 caracteres")
        .max(100, "O nome pode ter até 100 caracteres"),

        telephone: yup.string().required("O telefone é obrigatório"),

        place: yup.string().required("O endereço é obrigatório"),

        document: yup.string().required("O campo é obrigatório")
        .min(11, "O campo precisa ter 11 caracteres")
        .max(11, "O campo precisa ter 11 caracteres"),

        picture: yup.string().required("O campo é obrigatório"),

        email: yup.string().required("O email é obrigatório")
        .email("É necessário fornecer um email"),

        password: yup.string().required("A senha é obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

        confirm: yup.string().required("É necessário confirmar sua senha")
        .oneOf([yup.ref('password')], "As senhas não coincidem"),

        city: yup.string().required("A cidade é obrigatório"),

        country: yup.string().required("O estado é obrigatório"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm<FormRegisterDonor>({ resolver: yupResolver(validate) })

    const teste = (data:IdataRegisterDonor) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(teste)}>
        
        <div>
            <Input label={"Nome"} id ={"name"} type={"text"} register ={register("name")} placeholder ={"Digite seu nome aqui"}/>
            {errors.name?.message && <p>{errors.name.message}</p>}
        </div>


        <div>
            <Input label={"Telefone"} id ={"telephone"} type={"number"} register ={register("telephone")} placeholder ={"Digite seu telefone aqui"}/>
            {errors.telephone?.message && <p>{errors.telephone.message}</p>}
        </div>

        <div>
            <Input label={"Endereço"} id ={"place"} type={"text"} register ={register("place")} placeholder ={"Digite seu endereço aqui"}/>
            {errors.place?.message && <p>{errors.place.message}</p>}
        </div>

        <div>
            <Input label={"CPF"} id ={"document"} type={"number"} register ={register("document")} placeholder ={"Digite seu CPF aqui"}/>
            {errors.document?.message && <p>{errors.document.message}</p>}
        </div>

        <div>
            <Input label={"Foto do perfil"} id ={"picture"} type={"text"} register ={register("picture")} placeholder ={"Digite o link de sua foto"}/>
            {errors.picture?.message && <p>{errors.picture.message}</p>}
        </div>

        <div>
            <Input label={"E-mail"} id ={"email"} type={"email"} register ={register("email")} placeholder ={"Digite seu email aqui"}/>
            {errors.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div>
            <InputPassword label={"Senha"} id ={"password"} register ={register("password")} placeholder ={"Digite sua senha aqui"}/>
            {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
            
        <div>
            <InputPassword label={"Repetir senha"} id ={"confirm"} register ={register("confirm")} placeholder ={"Digite novamente sua senha aqui"}/>
            {errors.confirm?.message && <p>{errors.confirm.message}</p>}
        </div>

        <div>
            <Input label={"Cidade"} id ={"city"} type={"text"} register ={register("city")} placeholder ={"Digite sua cidade aqui"}/>
            {errors.city?.message && <p>{errors.city.message}</p>}
        </div>

        <div>
            <Input label={"Estado"} id ={"country"} type={"text"} register ={register("country")} placeholder ={"Digite seu estado aqui"}/>
            {errors.country?.message && <p>{errors.country.message}</p>}
        </div>

        <Button size='sm'theme='primary' type='submit'>Cadastrar</Button>
        </form>
    )
}