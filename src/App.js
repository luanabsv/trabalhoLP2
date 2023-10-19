import Tela404 from "./telasCadastro/Tela404";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProdutos from "./telasCadastro/TelaCadastroProdutos"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaMenu from "./telasCadastro/TelaMenu";
import TelaCadastroFornecedores from "./telasCadastro/TelaCadastroFornecedor";
import TelaCadastroCategorias from "./telasCadastro/TelaCadastroCategorias";

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<TelaCadastroCliente/>} />
          <Route path="/produtos" element={<TelaCadastroProdutos/>}/>
          <Route path="/fornecedores" element={<TelaCadastroFornecedores/>}/>
          <Route path="/categorias" element={<TelaCadastroCategorias/>}/>
          <Route path="/" element={<TelaMenu/>}/>

          <Route path="*" element={<Tela404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
