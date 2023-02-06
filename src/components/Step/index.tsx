import { useState } from "react";
import StepIcon from "./StepIcon";
import CadastroPagina0 from "../Cadastro/CadastroPagina0";
import CadastroPagina1 from "../Cadastro/CadastroPagina1";
import CadastroPagina2 from "../Cadastro/CadastroPagina2";
import { ICadastro } from "../Cadastro";

import "../../style/css/Step.min.css";

type IStepLabels = {
  title: string;
  icon: string;
};

export interface IStep extends ICadastro {
  stepListLabels?: Array<IStepLabels>;
  onReturn?: any;
}

export interface ICadastroPagina extends IStep {
  onChangeStep?: any;
}

const Step = ({ ...props }: IStep) => {
  const [current, setCurrent] = useState<number>(0);
  const ulClasses = `d-flex align-items-center my-5 list-unstyled flex-wrap`;

  // precisa ser criado

  const lastStep = 2;

  const changeStepHandler = (acao: string) => {
    if (acao === "proximo") {
      if (current + 1 <= lastStep) setCurrent(current + 1);
      else props.onReturn(props.dados);
    } else if (acao === "anterior" && current - 1 >= 0) setCurrent(current - 1);
  };

  // precisa adicionar onSubmit handler

  const stepListContent = [
    <CadastroPagina0 {...props} onChangeStep={changeStepHandler} />,
    <CadastroPagina1 {...props} onChangeStep={changeStepHandler} />,
    <CadastroPagina2 {...props} onChangeStep={changeStepHandler} />,
  ];

  return (
    <>
      <nav>
        <ul className={ulClasses}>
          {props.stepListLabels &&
            props.stepListLabels.map((step, i) => {
              return (
                <li className="d-flex flex-wrap align-items-center">
                  <StepIcon icon={step.icon} currentStep={current} index={i} />
                  <span className="Step__label">{step.title}</span>
                </li>
              );
            })}
        </ul>
      </nav>

      {stepListContent[current]}
    </>
  );
};

export default Step;
