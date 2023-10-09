import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { useState } from "react";
export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        codigo: '',
        nome: '',
        preco: 0.0,
        quantidadeEstoque: 0
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadProduto 
                                            setExibirFormulario={setExibirFormulario} 
                                            listaProdutos={listaProdutos}
                                            setListaProdutos={setListaProdutos}
                                            setProdutoParaEdicao={setProdutoParaEdicao}
                                            produtoParaEdicao={produtoParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                        /> 
                                    : <TabelaProdutos 
                                            setExibirFormulario={setExibirFormulario} 
                                            listaProdutos={listaProdutos}
                                            setListaProdutos={setListaProdutos}
                                            produtoParaEdicao={produtoParaEdicao}
                                            setProdutoParaEdicao={setProdutoParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                    />
                }
            </Pagina>
        </Container>
    )
}