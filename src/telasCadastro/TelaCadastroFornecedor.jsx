import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores"

export default function TelaCadastroFornecedores(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [fonecedorParaEdicao, setFornecedorParaEdicao] = useState({
        nome: '',
        cnpj: '',
        email: '',
        categoria: '',
        telefone: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadFornecedor setExibirFormulario={setExibirFormulario}
                                                            listaFornecedores={listaFornecedores}
                                                            setListaFornecedores={setListaFornecedores}
                                                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                            fonecedorParaEdicao={fonecedorParaEdicao}
                                                            modoEdicao={modoEdicao}
                                                            setModoEdicao={setModoEdicao}/> 
                                    : <TabelaFornecedores setExibirFormulario={setExibirFormulario}
                                                            listaFornecedores={listaFornecedores}
                                                            setListaFornecedores={setListaFornecedores}
                                                            setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                            fonecedorParaEdicao={fonecedorParaEdicao}
                                                            modoEdicao={modoEdicao}
                                                            setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </Container>
    )
}