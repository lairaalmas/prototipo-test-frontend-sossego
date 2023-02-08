import { forwardRef, useState } from "react";

import "../../style/css/Cadastro.min.css";
import "../../style/css/Form.min.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: "text" | "password" | "email" | "date" | "tel" | "number";
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  return (
    <>
      <label htmlFor={props.id} className="Cadastro__label">
        {props.label}
      </label>
      <input
        {...props}
        type={props.type}
        className={`form-control ${props.className}`}
        id={props.id}
        ref={ref}
      />
    </>
  );
});

export default Input;
