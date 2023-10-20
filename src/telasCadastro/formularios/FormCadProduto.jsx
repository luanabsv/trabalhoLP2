import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { adicionarProduto, atualizarProduto } from "../../redux/produtoReducer";

export default function FormCadProduto(props) {
  const produtoVazio = {
    cod: '',
    nome: '',
    descricao: '',
    preco: 0,
  };

  const estadoInicialProduto = props.produtoParaEdicao;
  const [produto, setProduto] = useState(estadoInicialProduto);
  const [formValidado, setFormValidado] = useState(false);
  const { status, mensagem, listaProdutos } = useSelector((state) => state.produto);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setProduto({ ...produto, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        dispatch(adicionarProduto(produto));
      } else {
        dispatch(atualizarProduto(produto));
        props.setModoEdicao(false);
        props.setProdutoParaEdicao(produtoVazio);
      }
      setProduto(produtoVazio);
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
              <Form.Label>Código do Produto:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Código do produto"
                name="cod"
                value={produto.cod}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome do Produto:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do produto"
                name="nome"
                value={produto.nome}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Descrição:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descrição do produto"
                name="descricao"
                value={produto.descricao}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Preço:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Preço do produto"
                name="preco"
                value={produto.preco}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o preço do produto!
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
