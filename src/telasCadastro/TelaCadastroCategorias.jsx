import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadCategoria from "./formularios/FormCadCategorias"
import TabelaCategorias from "./tabelas/TabelaCategorias";

export default function TelaCadastroCategorias(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategorias, setListaCategorias] = useState([]);
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCategoria setExibirFormulario={setExibirFormulario}
                                                            listaCategorias={listaCategorias}
                                                            setListaCategorias={setListaCategorias}/> 
                                    : <TabelaCategorias setExibirFormulario={setExibirFormulario}
                                                            listaCategorias={listaCategorias}
                                                            setListaCategorias={setListaCategorias}/>
                }
            </Pagina>
        </Container>
    )
}