import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
export default function FormCadCProduto(props) {
    const estadoinicialProduto = {
        nome:'',
        estoque:'',
        categoria:'',
        fornecedor:''
    }

    const [produto, setProduto] = useState(estadoinicialProduto);

    const [formValidado, setFormValidado] = useState(false);

    function manipularMundancas(evento) {
        const componente = evento.currentTarget;
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget; 
        if (form.checkValidity()){
            props.setListaProdutos([...props.listaProdutos,produto]);
            setProduto(estadoinicialProduto);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        evento.stopPropagation();
        evento.preventDefault();
    }
    return (
        <Container validated={formValidado} onSubmit={manipularSubmissao} style={{marginTop: '20px'}}>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" required value={produto.nome} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Estoque:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe a quantidade no estoque" id="estoque" name="estoque" required value={produto.estoque} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a quantidade no estoque</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria do Produto:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe a quantidade no estoque" id="categoria" name="categoria" required value={produto.categoria} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria do produto</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Fornecedor:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome do fornecedor" id="fornecedor" name="fornecedor" required value={produto.fornecedor} onChange={manipularMundancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o fornecedor</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.setExibirFormulario(false)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}