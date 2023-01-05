import { useState } from "react";
import { PasswordBox } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface iInputPasswordtProps {
  label: string;
  id: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

export const InputPassword = ({
  disabled,
  label,
  id,
  placeholder,
  register,
}: iInputPasswordtProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <PasswordBox>
        <label htmlFor={id}>{label}</label>
        <div>
          <input
            id={id}
            type={visible ? "text" : "password"}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
          ></input>
          <button type="button" onClick={() => setVisible(!visible)}>
            {visible ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
          </button>
        </div>
      </PasswordBox>
    </>
  );
};
