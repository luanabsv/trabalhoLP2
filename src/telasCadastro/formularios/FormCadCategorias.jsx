import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { adicionarCategoria, atualizarCategoria } from "../../redux/categoriaReducer";

export default function FormCadCategoria(props) {
  const categoriaVazia = {
    id: '',
    nome: '',
    descricao: '',
  };

  const estadoInicialCategoria = props.categoriaParaEdicao;
  const [categoria, setCategoria] = useState(estadoInicialCategoria);
  const [formValidado, setFormValidado] = useState(false);
  const { status, mensagem, listaCategorias } = useSelector((state) => state.categoria);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCategoria({ ...categoria, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        dispatch(adicionarCategoria(categoria));
      } else {
        dispatch(atualizarCategoria(categoria));
        props.setModoEdicao(false);
        props.setCategoriaParaEdicao(categoriaVazia);
      }
      setCategoria(categoriaVazia);
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
              <Form.Label>Nome da Categoria:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da categoria"
                name="nome"
                value={categoria.nome}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe o nome da categoria!
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
                rows={3}
                placeholder="Descrição da categoria"
                name="descricao"
                value={categoria.descricao}
                onChange={manipularMudancas}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe a descrição da categoria!
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