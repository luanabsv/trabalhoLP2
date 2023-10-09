import { Alert, Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function Tela404(props) {
    return (
        <Container>
            <Pagina>
                <Alert variant="danger" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%)', width: 'max-content'}}>
                    O sistema não oferece acesso a essa página.
                    Utilize o Menu para acessar as opções válidas. Acesse a aba cadastros no menu para e selecione o tipo do cadastro desejado.
                </Alert>
            </Pagina>
        </Container>
    );
}
