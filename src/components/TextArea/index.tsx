import React, { forwardRef } from "react";

import "../../style/css/Form.min.css";

interface ITextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        {...props}
        className={`form-control mt-2 Form__textArea ${props.className}`}
        id={props.id}
        ref={ref}
      />
    </div>
  );
});

export default TextArea;
