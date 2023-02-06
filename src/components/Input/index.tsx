import { forwardRef } from "react";

import "../../style/css/Cadastro.min.css";
import "../../style/css/Form.min.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: "text" | "password" | "email" | "date" | "tel";
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id} className="Cadastro__label">
        {props.label}
      </label>
      <input
        {...props}
        type={props.type}
        className="form-control"
        id={props.id}
        ref={ref}
      />
    </div>
  );
});

export default Input;
