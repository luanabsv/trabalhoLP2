import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        cnpj: '',
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadFornecedor 
                                            setExibirFormulario={setExibirFormulario} 
                                            listaFornecedores={listaFornecedores}
                                            setListaFornecedores={setListaFornecedores}
                                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                                            fornecedorParaEdicao={fornecedorParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                        /> 
                                    : <TabelaFornecedores 
                                            setExibirFormulario={setExibirFormulario} 
                                            listaFornecedores={listaFornecedores}
                                            setListaFornecedores={setListaFornecedores}
                                            fornecedorParaEdicao={fornecedorParaEdicao}
                                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                    />
                }
            </Pagina>
        </Container>
    )
}