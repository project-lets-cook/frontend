import { InputStyled } from "./styles";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  label: string;
  id: string;
  type?: "text" | "password" | "email" | "number";
  placeholder: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  rows?: string
  cols?: string
}

export const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
  disabled,
}: iInputProps) => {
  return (
    <>
      <InputStyled>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          required={true}
        />
        <label htmlFor={id}>{label}</label>
      </InputStyled>
    </>
  );
};
