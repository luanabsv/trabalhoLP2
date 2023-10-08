import { Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function TelaMenu(props) {
    
    return (
        <Pagina>
            <Alert key={'warning'} variant={'warning'} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%)', width: 'max-content'}}>
                Acesse a aba cadastros no menu para e selecione o tipo do cadastro desejado
            </Alert>
        </Pagina>
    );
}