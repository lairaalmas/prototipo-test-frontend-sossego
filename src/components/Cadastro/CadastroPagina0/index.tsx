import { SyntheticEvent, useState } from "react";
import { ICadastroPagina } from "../../Step";
import Form from "../../Form";
import Input from "../../Input";
import Botao from "../../Botao";

import "../../../style/css/Botao.min.css";

const CadastroPagina0 = (props: ICadastroPagina) => {
  const [dados, setDados] = useState({
    nome: props.dados.nome || "",
    senha: props.dados.senha || "",
    senhaConf: "",
    email: props.dados.email || "",
    nascimento: props.dados.dataNascimento || "",
  });

  const handleSubmit = (e: SyntheticEvent, acaoBotao: string) => {
    const novosDados = {
      nome: dados.nome,
      senha: dados.senha,
      email: dados.email,
      dataNascimento: dados.nascimento,
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
      <div className="mb-4">
        <Input
          type="text"
          label="Nome"
          id="form-nome"
          value={dados.nome}
          onChange={(e) => {
            setDados({ ...dados, nome: e.target.value });
          }}
        />
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="password"
            label="Senha"
            id="form-senha"
            value={dados.senha}
            onChange={(e) => {
              setDados({ ...dados, senha: e.target.value });
            }}
          />
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="password"
            label="Confirmar Senha"
            id="form-senha-conf"
            value={dados.senhaConf}
            onChange={(e) => {
              setDados({ ...dados, senhaConf: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="email"
            label="Email"
            id="form-email"
            value={dados.email}
            onChange={(e) => {
              setDados({ ...dados, email: e.target.value });
            }}
          />
        </div>
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="date"
            label="Data de nascimento"
            id="form-nascimento"
            value={dados.nascimento}
            onChange={(e) => {
              setDados({ ...dados, nascimento: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="Botao__container d-flex justify-content-end flex-wrap gap-2">
        <Botao text="Próximo passo" type="submit" />
      </div>
    </Form>
  );
};

export default CadastroPagina0;
