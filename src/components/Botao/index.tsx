import React from "react";

import "../../style/css/Botao.min.css";

interface IBotao extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Botao = (props: IBotao) => {
  return (
    <>
      <button {...props} className={`btn btn-primary ${props.className}`}>
        {props.text}
      </button>
    </>
  );
};

export default Botao;
