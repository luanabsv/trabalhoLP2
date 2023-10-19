import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

export default function FormCadFornecedor(props) {
    const fornecedorVazio = {
        cnpj: '',
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    };

    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(evento) {
        const componente = evento.currentTarget;
        setFornecedor({ ...fornecedor, [componente.name]: componente.value });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaFornecedores([...props.listaFornecedores, fornecedor]);
                alert("Fornecedor cadastrado com sucesso!");
            } else {
                props.setListaFornecedores([
                    ...props.listaFornecedores.filter((itemFornecedor) => itemFornecedor.cnpj !== fornecedor.cnpj),
                    fornecedor
                ]);
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);
                alert("Fornecedor alterado com sucesso!");
            }
            props.setExibirFormulario(false);
            setFornecedor(fornecedorVazio);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }

        evento.stopPropagation();
        evento.preventDefault();
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CNPJ:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="00.000.000/0000-00"
                                    id="cnpj"
                                    name="cnpj"
                                    required
                                    value={fornecedor.cnpj}
                                    onChange={manipularMudancas}
                                />
                                <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Nome do fornecedor"
                                    id="nome"
                                    name="nome"
                                    required
                                    value={fornecedor.nome}
                                    onChange={manipularMudancas}
                                />
                                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Avenida/Rua/Alameda/Viela ..."
                                    id="endereco"
                                    name="endereco"
                                    required
                                    value={fornecedor.endereco}
                                    onChange={manipularMudancas}
                                />
                                <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Telefone"
                                    id="telefone"
                                    name="telefone"
                                    required
                                    value={fornecedor.telefone}
                                    onChange={manipularMudancas}
                                />
                                <Form.Control.Feedback type="invalid">Informe o telefone!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="E-mail:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail do fornecedor"
                                    id="email"
                                    name="email"
                                    required
                                    value={fornecedor.email}
                                    onChange={manipularMudancas}
                                />
                                <Form.Control.Feedback type="invalid">Informe um e-mail válido!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={props.modoEdicao ? "warning" : "primary"}>
                            {props.modoEdicao ? "Alterar" : "Cadastrar"}
                        </Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button
                            type="button"
                            variant={"secondary"}
                            onClick={() => {
                                props.setModoEdicao(false);
                                props.setFornecedorParaEdicao(fornecedorVazio);
                                props.setExibirFormulario(false);
                            }}
                        >
                            Voltar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}