import { SyntheticEvent } from "react";
import useInput from "../../../customHooks/useInput";
import Form from "../../Form";
import Input from "../../Input";
import Botao from "../../Botao";
import { ICadastroPagina } from "../../Step";

import "../../../style/css/Botao.min.css";
import "../../../style/css/Cadastro.min.css";

const CadastroPagina0 = (props: ICadastroPagina) => {
  const validarEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    value: nome,
    isValidFormat: nomeIsValidFormat,
    displayErrorMsg: nomeDisplayErrorMsg,
    onChangeHandler: nomeOnChangeHandler,
    onBlurHandler: nomeOnBlurHandler,
    //resetField: nomeResetField,
  } = useInput(props.dados.nome, (value: string) => value.trim() !== "");

  const {
    value: senha,
    isValidFormat: senhaIsValidFormat,
    displayErrorMsg: senhaDisplayErrorMsg,
    onChangeHandler: senhaOnChangeHandler,
    onBlurHandler: senhaOnBlurHandler,
    //resetField: senhaResetField,
  } = useInput(props.dados.senha, (value: string) => value.trim() !== "");

  const {
    value: senhaConf,
    isValidFormat: senhaConfIsValidFormat,
    displayErrorMsg: senhaConfDisplayErrorMsg,
    onChangeHandler: senhaConfOnChangeHandler,
    onBlurHandler: senhaConfOnBlurHandler,
    //resetField: senhaConfResetField,
  } = useInput(
    props.dados.senha,
    (value: string) => value.trim() !== "" && value === senha
  );

  const {
    value: email,
    isValidFormat: emailIsValidFormat,
    displayErrorMsg: emailDisplayErrorMsg,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    //resetField: emailResetField,
  } = useInput(
    props.dados.email,
    (value: string) => value.trim() !== "" && validarEmail(value)
  );

  const {
    value: nascimento,
    isValidFormat: nascimentoIsValidFormat,
    displayErrorMsg: nascimentoDisplayErrorMsg,
    onChangeHandler: nascimentoOnChangeHandler,
    onBlurHandler: nascimentoOnBlurHandler,
    //resetField: nascimentoResetField,
  } = useInput(
    props.dados.dataNascimento,
    (value: string) => value.trim() !== ""
  );

  const onSubmitHandler = (e: SyntheticEvent, acaoBotao: string) => {
    e.preventDefault();

    if (
      !nomeIsValidFormat ||
      !senhaIsValidFormat ||
      !senhaConfIsValidFormat ||
      !emailIsValidFormat ||
      !nascimentoIsValidFormat
    ) {
      nomeOnBlurHandler();
      senhaOnBlurHandler();
      senhaConfOnBlurHandler();
      emailOnBlurHandler();
      nascimentoOnBlurHandler();
      return;
    }

    const novosDados = {
      nome: nome,
      senha: senha,
      email: email,
      dataNascimento: nascimento,
    };

    props.onAtualizarDados(novosDados);
    props.onChangeStep(acaoBotao);
  };

  return (
    <Form
      onSubmit={(e) => {
        onSubmitHandler(e, "proximo");
      }}
    >
      <div className="mb-4">
        <Input
          type="text"
          label="Nome"
          id="form-nome"
          value={nome}
          onChange={(event) => nomeOnChangeHandler(event)}
          onBlur={nomeOnBlurHandler}
        />
        {nomeDisplayErrorMsg && (
          <div className="-invalid">Por favor digite um nome</div>
        )}
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="password"
            label="Senha"
            id="form-senha"
            value={senha}
            onChange={(event) => senhaOnChangeHandler(event)}
            onBlur={senhaOnBlurHandler}
          />
          {senhaDisplayErrorMsg && (
            <div className="-invalid">Por favor digite uma senha</div>
          )}
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="password"
            label="Confirmar Senha"
            id="form-senha-conf"
            value={senhaConf}
            onChange={(event) => senhaConfOnChangeHandler(event)}
            onBlur={senhaConfOnBlurHandler}
          />
          {senhaConfDisplayErrorMsg && (
            <div className="-invalid">Por favor digite novamente sua senha</div>
          )}
        </div>
      </div>

      <div className="row mb-4">
        <div className="form-group col-sm-12 col-lg-6 mb-4">
          <Input
            type="email"
            label="Email"
            id="form-email"
            value={email}
            onChange={(event) => emailOnChangeHandler(event)}
            onBlur={emailOnBlurHandler}
          />
          {emailDisplayErrorMsg && (
            <div className="-invalid">Por favor digite um email válido</div>
          )}
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="date"
            label="Data de nascimento"
            id="form-nascimento"
            value={nascimento}
            onChange={(event) => nascimentoOnChangeHandler(event)}
            onBlur={nascimentoOnBlurHandler}
          />
          {nascimentoDisplayErrorMsg && (
            <div className="-invalid">Por favor digite uma data</div>
          )}
        </div>
      </div>

      <div className="Botao__container d-flex justify-content-end flex-wrap gap-2">
        <Botao text="Próximo passo" type="submit" />
      </div>
    </Form>
  );
};

export default CadastroPagina0;
