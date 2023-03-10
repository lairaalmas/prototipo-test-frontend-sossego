import { SyntheticEvent } from "react";
import useInput from "../../../customHooks/useInput";
import Form from "../../Form";
import Input from "../../Input";
import Botao from "../../Botao";
import { ICadastroPagina } from "../../Step";

import "../../../style/css/Botao.min.css";

const CadastroPagina1 = (props: ICadastroPagina) => {
  const validarCep = (cep: string) => {
    var cepFormatado = cep.replace(".", "").replace("-", "");
    return String(cepFormatado).match(/^[0-9]{8}$/);
  };

  const {
    value: cep,
    isValidFormat: cepIsValidFormat,
    displayErrorMsg: cepDisplayErrorMsg,
    onChangeHandler: cepOnChangeHandler,
    onBlurHandler: cepOnBlurHandler,
  } = useInput(
    props.dados.cep,
    (value: string) => value.trim() !== "" && validarCep(value)
  );

  const {
    value: cidade,
    isValidFormat: cidadeIsValidFormat,
    displayErrorMsg: cidadeDisplayErrorMsg,
    onChangeHandler: cidadeOnChangeHandler,
    onBlurHandler: cidadeOnBlurHandler,
  } = useInput(props.dados.cidade, (value: string) => value.trim() !== "");

  const {
    value: bairro,
    isValidFormat: bairroIsValidFormat,
    displayErrorMsg: bairroDisplayErrorMsg,
    onChangeHandler: bairroOnChangeHandler,
    onBlurHandler: bairroOnBlurHandler,
  } = useInput(props.dados.bairro, (value: string) => value.trim() !== "");

  const {
    value: rua,
    isValidFormat: ruaIsValidFormat,
    displayErrorMsg: ruaDisplayErrorMsg,
    onChangeHandler: ruaOnChangeHandler,
    onBlurHandler: ruaOnBlurHandler,
  } = useInput(props.dados.rua, (value: string) => value.trim() !== "");

  const {
    value: numero,
    isValidFormat: numeroIsValidFormat,
    displayErrorMsg: numeroDisplayErrorMsg,
    onChangeHandler: numeroOnChangeHandler,
    onBlurHandler: numeroOnBlurHandler,
  } = useInput(props.dados.numero, (value: string) => value.trim() !== "");

  const {
    value: referencia,
    isValidFormat: referenciaIsValidFormat,
    displayErrorMsg: referenciaDisplayErrorMsg,
    onChangeHandler: referenciaOnChangeHandler,
    onBlurHandler: referenciaOnBlurHandler,
  } = useInput(props.dados.referencia, (value: string) => value.trim() !== "");

  const onSubmitHandler = (e: SyntheticEvent, acaoBotao: string) => {
    e.preventDefault();

    if (
      !cepIsValidFormat ||
      !cidadeIsValidFormat ||
      !bairroIsValidFormat ||
      !ruaIsValidFormat ||
      !numeroIsValidFormat ||
      !referenciaIsValidFormat
    ) {
      cepOnBlurHandler();
      cidadeOnBlurHandler();
      bairroOnBlurHandler();
      ruaOnBlurHandler();
      numeroOnBlurHandler();
      referenciaOnBlurHandler();
      return;
    }

    const novosDados = {
      cep: cep,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero,
      referencia: referencia,
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
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="CEP"
            id="form-cep"
            value={cep}
            onChange={(event) => cepOnChangeHandler(event)}
            onBlur={cepOnBlurHandler}
          />
          {cepDisplayErrorMsg && (
            <div className="-invalid">Por favor digite um CEP v??lido</div>
          )}
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="Rua"
            id="form-rua"
            value={rua}
            onChange={(event) => ruaOnChangeHandler(event)}
            onBlur={ruaOnBlurHandler}
          />
          {ruaDisplayErrorMsg && (
            <div className="-invalid">Por favor digite o nome da rua</div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-4">
              <Input
                type="number"
                label="N??mero"
                min={0}
                id="form-numero"
                value={numero}
                onChange={(event) => numeroOnChangeHandler(event)}
                onBlur={numeroOnBlurHandler}
              />
              {numeroDisplayErrorMsg && (
                <div className="-invalid">
                  Por favor digite o n??mero da casa
                </div>
              )}
            </div>
            <div className="col-sm-12 col-md-6 mb-4">
              <Input
                type="text"
                label="Bairro"
                id="form-bairro"
                value={bairro}
                onChange={(event) => bairroOnChangeHandler(event)}
                onBlur={bairroOnBlurHandler}
              />
              {bairroDisplayErrorMsg && (
                <div className="-invalid">
                  Por favor digite o nome do bairro
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 mb-4">
          <Input
            type="text"
            label="Cidade"
            id="form-cidade"
            value={cidade}
            onChange={(event) => cidadeOnChangeHandler(event)}
            onBlur={cidadeOnBlurHandler}
          />
          {cidadeDisplayErrorMsg && (
            <div className="-invalid">Por favor digite a cidade</div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          label="Ponto de Refer??ncia"
          id="form-referencia"
          value={referencia}
          onChange={(event) => referenciaOnChangeHandler(event)}
          onBlur={referenciaOnBlurHandler}
        />
        {referenciaDisplayErrorMsg && (
          <div className="-invalid">
            Por favor digite um ponto de refer??ncia
          </div>
        )}
      </div>

      <div className="Botao__container d-flex justify-content-end flex-wrap gap-2">
        <Botao
          className="-unfocused"
          text="Anterior"
          type="button"
          onClick={(e) => {
            onSubmitHandler(e, "anterior");
          }}
        />
        <Botao text="Pr??ximo passo" type="submit" />
      </div>
    </Form>
  );
};

export default CadastroPagina1;
