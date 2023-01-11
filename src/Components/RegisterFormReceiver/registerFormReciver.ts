import * as yup from "yup";

export const registerFormReciver = yup.object().shape({
    company: yup.string().required("O campo é obrigatório"),

    cnpj: yup
        .string()
        .required("O campo é obrigatório")
        .min(14, "O campo precisa ter 14 caracteres")
        .max(14, "O campo precisa ter 14 caracteres"),

    telephone: yup.string().required("O telefone é obrigatório"),

    place: yup.string().required("O endereço é obrigatório"),

    sponsor: yup.string().required("O campo é obrigatório"),

    picture: yup.string().required("O campo é obrigatório"),

    email: yup
        .string()
        .required("O email é obrigatório")
        .email("É necessário fornecer um email válido"),

    password: yup
        .string()
        .required("A senha é obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(
            /(?=.*?[#?!@$%^&*-])/,
            "É necessário pelo menos um caractere especial"
        )
        .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

    confirm: yup
        .string()
        .required("É necessário confirmar sua senha")
        .oneOf([yup.ref("password")], "As senhas não coincidem"),

    city: yup.string().required("A cidade é obrigatório"),

    country: yup.string().required("O estado é obrigatório"),
});