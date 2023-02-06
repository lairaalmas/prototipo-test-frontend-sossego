import Botao from "../../Botao";
import { ICadastroPagina } from "../../Step";

import "../../../style/css/Cadastro.min.css";
import "../../../style/css/Botao.min.css";

const CadastroConcluido = (props: ICadastroPagina) => {
  console.log(props.dados);
  return (
    <>
      <div className="d-flex flex-column mt-5 mb-3">
        <small id="label-nome" className="Cadastro__label -output">
          Nome
        </small>
        <span aria-labelledby="label-nome">{props.dados.nome}</span>
      </div>
      <div className="d-flex flex-column mb-3">
        <small id="label-email" className="Cadastro__label -output">
          Email
        </small>
        <span aria-labelledby="label-email">{props.dados.email}</span>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column mb-3">
          <small id="label-rua" className="Cadastro__label -output">
            Rua
          </small>
          <span aria-labelledby="label-rua">{props.dados.rua}</span>
        </div>

        <div className="col-6 d-flex flex-column mb-3">
          <small id="label-numero" className="Cadastro__label -output">
            Número
          </small>
          <span aria-labelledby="label-numero">{props.dados.numero}</span>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <small id="label-cep" className="Cadastro__label -output">
          Cep
        </small>
        <span aria-labelledby="label-cep">{props.dados.cep}</span>
      </div>

      <div className="Botao__container d-grid">
        <Botao className="d-grid mt-5" text="Novo usuário" type="button" />
      </div>
    </>
  );
};

export default CadastroConcluido;
