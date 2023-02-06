import { useState } from "react";
import Cadastro from "./components/Cadastro";
import "./style/css/App.min.css";

export type IDadosUsuario = {
  nome?: string;
  senha?: string;
  email?: string;
  dataNascimento?: string;
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  referencia?: string;
  sobre?: string;
};

function App() {
  const [dados, setDados] = useState<IDadosUsuario>({});

  const atualizarDados = (dadosNovos: IDadosUsuario) => {
    const novosDados = { ...dados, ...dadosNovos };
    setDados(novosDados);
  };

  return (
    <div className="App d-flex align-items-center justify-content-center">
      <Cadastro onAtualizarDados={atualizarDados} dados={dados} />
    </div>
  );
}

export default App;
