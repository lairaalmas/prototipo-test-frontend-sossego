import { useState } from "react";
import { IDadosUsuario } from "../../App";
import Container from "../Container";
import Step from "../Step";
import CadastroConcluido from "./CadastroConcluido";

import "../../style/css/Cadastro.min.css";

export type ICadastro = {
  onAtualizarDados?: any;
  dados: IDadosUsuario;
};

const Cadastro = (props: ICadastro) => {
  const [isCompleto, setIsCompleto] = useState<boolean>(false);

  const stepListLabels = [
    { title: "Identificação do usuário", icon: "bi bi-award-fill" },
    { title: "Endereço do usuário", icon: "bi bi-house-door-fill" },
    { title: "Sobre você", icon: "bi bi-file-earmark-text-fill" },
  ];

  const onReturnHandler = () => {
    setIsCompleto(true);
  };

  return isCompleto ? (
    <Container size="small">
      <h1 className="Cadastro__title text-center">Usuário cadastrado!</h1>
      <CadastroConcluido {...props} />
    </Container>
  ) : (
    <Container>
      <h1 className="Cadastro__title">Criação de usuário</h1>
      <Step
        {...props}
        stepListLabels={stepListLabels}
        onReturn={onReturnHandler}
      />
    </Container>
  );
};

export default Cadastro;
