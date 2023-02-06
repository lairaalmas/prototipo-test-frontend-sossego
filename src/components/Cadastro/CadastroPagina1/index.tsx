import { SyntheticEvent, useState } from "react";
import { ICadastroPagina } from "../../Step";
import Form from "../../Form";
import Input from "../../Input";
import Botao from "../../Botao";

import "../../../style/css/Botao.min.css";

const CadastroPagina1 = (props: ICadastroPagina) => {
  const [dados, setDados] = useState({
    cep: props.dados.cep || "",
    cidade: props.dados.cidade || "",
    bairro: props.dados.bairro || "",
    rua: props.dados.rua || "",
    numero: props.dados.numero || "",
    referencia: props.dados.referencia || "",
  });

  const handleSubmit = (e: SyntheticEvent, acaoBotao: string) => {
    const novosDados = {
      cep: dados.cep,
      cidade: dados.cidade,
      bairro: dados.bairro,
      rua: dados.rua,
      numero: dados.numero,
      referencia: dados.referencia,
    };
    props.onAtualizarDados(novosDados);
    props.onChangeStep(acaoBotao);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e, "proximo");
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="CEP"
            id="form-cep"
            value={dados.cep}
            onChange={(e) => {
              setDados({ ...dados, cep: e.target.value });
            }}
          />
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="Rua"
            id="form-rua"
            value={dados.rua}
            onChange={(e) => {
              setDados({ ...dados, rua: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-4">
              <Input
                type="tel"
                label="Número"
                id="form-numero"
                value={dados.numero}
                onChange={(e) => {
                  setDados({ ...dados, numero: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-4">
              <Input
                type="text"
                label="Bairro"
                id="form-bairro"
                value={dados.bairro}
                onChange={(e) => {
                  setDados({ ...dados, bairro: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="Cidade"
            id="form-cidade"
            value={dados.cidade}
            onChange={(e) => {
              setDados({ ...dados, cidade: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="row mb-4">
        <Input
          type="text"
          label="Ponto de Referência"
          id="form-referencia"
          value={dados.referencia}
          onChange={(e) => {
            setDados({ ...dados, referencia: e.target.value });
          }}
        />
      </div>

      <div className="Botao__container d-flex justify-content-end flex-wrap gap-2">
        <Botao
          className="-unfocused"
          text="Anterior"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e, "anterior");
          }}
        />
        <Botao text="Próximo passo" type="submit" />
      </div>
    </Form>
  );
};

export default CadastroPagina1;
