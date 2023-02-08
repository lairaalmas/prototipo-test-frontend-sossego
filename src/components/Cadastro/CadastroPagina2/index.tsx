import { SyntheticEvent, useState } from "react";
import { ICadastroPagina } from "../../Step";
import Form from "../../Form";
import TextArea from "../../TextArea";
import Botao from "../../Botao";

import "../../../style/css/Botao.min.css";

const CadastroPagina2 = (props: ICadastroPagina) => {
  const [sobre, setSobre] = useState(props.dados.sobre || "");

  const onSubmitHandler = (e: SyntheticEvent, acaoBotao: string) => {
    e.preventDefault();
    props.onAtualizarDados({ sobre: sobre });
    props.onChangeStep(acaoBotao);
  };

  return (
    <Form
      onSubmit={(e) => {
        onSubmitHandler(e, "proximo");
      }}
    >
      <TextArea
        className="mb-4"
        label="Nos conte mais sobre você"
        id="form-sobre"
        value={sobre}
        onChange={(e) => {
          setSobre(e.target.value);
        }}
      />

      <div className="Botao__container d-flex justify-content-end flex-wrap gap-2">
        <Botao
          className="-unfocused"
          text="Anterior"
          type="button"
          onClick={(e) => {
            onSubmitHandler(e, "anterior");
          }}
        />
        <Botao text="Próximo passo" type="submit" />
      </div>
    </Form>
  );
};

export default CadastroPagina2;
