import * as yup from "yup";

export const AddDonationSchema = yup.object().shape({
    title: yup.string().required("O titulo é obrigatório"),

    category: yup.string().required('Campo Obrigatório'),

    validation: yup.string().required("A validade é obrigatória"),

    descripition: yup.string().required("A descrição é obrigatória"),

    amounts: yup.number().required('A quantidade é obrigatória'),

    city: yup.string().required('Esté campo é Obrigatório'),

    state: yup.string().required()
  });