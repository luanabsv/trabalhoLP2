import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { adicionarFornecedor, atualizarFornecedor } from "../../redux/fornecedorReducer";

export default function FormCadFornecedor(props) {
  const fornecedorVazio = {
    id: '',
    nome: '',
    endereco: '',
    telefone: '',
  };

  const estadoInicialFornecedor = props.fornecedorParaEdicao;
  const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
  const [formValidado, setFormValidado] = useState(false);
  const { status, mensagem, listaFornecedores } = useSelector((state) => state.fornecedor);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setFornecedor({ ...fornecedor, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        dispatch(adicionarFornecedor(fornecedor));
      } else {
        dispatch(atualizarFornecedor(fornecedor));
        props.setModoEdicao(false);
        props.setFornecedorParaEdicao(fornecedorVazio);
      }
      setFornecedor(fornecedorVazio);
      setFormValidado(false);
    } else {
      setFormValidado(true);
    }

    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container>
      <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome do Fornecedor:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do fornecedor"
                name="nome"
                value={fornecedor.nome}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o nome do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Endereço:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço do fornecedor"
                name="endereco"
                value={fornecedor.endereco}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o endereço do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefone do fornecedor"
                name="telefone"
                value={fornecedor.telefone}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o telefone do fornecedor!
              </Form.Control.Feedback>
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
              variant="secondary"
              onClick={() => {
                props.exibirFormulario(false);
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