import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
export default function FormCadCategoria(props) {
    const estadoInicialCategoria = {
        nome:'',
    }

    const [categoria, setCategoria] = useState(estadoInicialCategoria);

    const [formValidado, setFormValidado] = useState(false);

    function manipularMundancas(evento) {
        const componente = evento.currentTarget;
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget; 
        if (form.checkValidity()){
            props.setListaCategorias([...props.listaCategorias,categoria]);
            setCategoria(estadoInicialCategoria);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        evento.stopPropagation();
        evento.preventDefault();
    }
    return (
        <Container style={{marginTop: '20px'}}>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" required value={categoria.nome} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.setExibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}