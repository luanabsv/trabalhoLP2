import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
export default function FormCadFornecedor(props) {
    const fornecedorVazio = {
        nome: '',
        cnpj: '',
        email: '',
        categoria: '',
        telefone: ''
    }

    const estadoinicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoinicialFornecedor);

    const [formValidado, setFormValidado] = useState(false);

    function manipularMundancas(evento) {
        const componente = evento.currentTarget;
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget; 
        if (form.checkValidity()){
            if (!props.modoEdicao) {
                props.setListaFornecedores([...props.listaFornecedores,fornecedor]);
                alert("Fornecedor salvo com sucesso!");
            }
            else {
                props.setListaFornecedores([...props.listaFornecedores.filter((itemFornecedor) => itemFornecedor.cnpj !== fornecedor.cnpj), fornecedor])
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);
                alert("Fornecedor alterado com sucesso!");
            }
            props.setExibirFormulario(false);
            setFornecedor(fornecedorVazio);
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
            <Form validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" required value={fornecedor.nome} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CPNJ:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="000.000.000-00" id="cnpj" name="cnpj" required value={fornecedor.cnpj} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cnpj!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Telefone" id="telefone" name="telefone" required value={fornecedor.telefone} onChange={manipularMundancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." id="email" name="email" required value={fornecedor.email} onChange={manipularMundancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o email!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria do Fornecedor"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Categoria do Fornecedor" id="categoria" name="categoria" required value={fornecedor.categoria} onChange={manipularMundancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria do Fornecedor</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={props.modoEdicao ? "warning":"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.modoEdicao(false);
                            props.setFornecedorParaEdicao(fornecedorVazio);
                            props.setExibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}