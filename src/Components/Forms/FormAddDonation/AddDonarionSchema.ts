import * as yup from "yup";

export const AddDonationSchema = yup.object().shape({
    title: yup.string().required("O titulo é obrigatório"),

    validation: yup.string().required("A validade é obrigatória"),

    descripition: yup.string().required("A descrição é obrigatória"),

    amount: yup.number().required('A quantidade é obrigatória')
  });