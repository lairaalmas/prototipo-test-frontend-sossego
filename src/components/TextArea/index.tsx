import React from "react";

import "../../style/css/Form.min.css";

interface ITextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

const TextArea = (props: ITextArea) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        {...props}
        className={`form-control mt-2 Form__textArea ${props.className}`}
        id={props.id}
      />
    </div>
  );
};

export default TextArea;
