import * as yup from "yup";

export const schemaRegisterDonorForm = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome precisa ter no mínimo 2 caracteres")
        .max(100, "O nome pode ter até 100 caracteres"),

    telephone: yup.string().required("O telefone é obrigatório"),

    street: yup.string().required("O endereço é obrigatório"),

    cpf: yup
        .string()
        .required("O campo é obrigatório")
        .min(11, "O campo precisa ter 11 caracteres")
        .max(11, "O campo precisa ter 11 caracteres"),

    profileImgUrl: yup.string().required("O campo é obrigatório"),

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

    confirmPassword: yup
        .string()
        .required("É necessário confirmar sua senha")
        .oneOf([yup.ref("password")], "As senhas não coincidem"),

    city: yup.string().required("A cidade é obrigatório"),

    state: yup.string().required("O estado é obrigatório"),
});