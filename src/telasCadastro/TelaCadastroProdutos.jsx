import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadCProduto from "./formularios/FormCadProduto"; 
import TabelaProduto from "./tabelas/TabelaProdutos";

export default function TelaCadastroProdutos(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCProduto setExibirFormulario={setExibirFormulario}
                                                            listaProdutos={listaProdutos}
                                                            setListaProdutos={setListaProdutos}/> 
                                    : <TabelaProduto setExibirFormulario={setExibirFormulario}
                                                            listaProdutos={listaProdutos}
                                                            setListaProdutos={setListaProdutos}/>
                }
            </Pagina>
        </Container>
    )
}