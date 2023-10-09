import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

export default function FormCadProduto(props) {
    const produtoVazio = {
        codigo: '',
        nome: '',
        preco: 0.0,
        quantidadeEstoque: 0
    };

    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(evento) {
        const componente = evento.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value });
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaProdutos([...props.listaProdutos, produto]);
                alert("Produto cadastrado com sucesso!");
            } else {
                props.setListaProdutos([
                    ...props.listaProdutos.filter((itemProduto) => itemProduto.codigo !== produto.codigo),
                    produto
                ]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);
                alert("Produto alterado com sucesso!");
            }
            props.setExibirFormulario(false);
            setProduto(produtoVazio);
            setFormValidado(false);
        } else {
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
                                label="Código:"
                                className="mb-3">
                                <Form.Control type="text" placeholder="Código do produto" id="codigo" name="codigo" required value={produto.codigo} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome do produto" id="nome" name="nome" required value={produto.nome} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço:"
                                className="mb-3"
                            >
                                <Form.Control type="number" step="0.01" placeholder="Preço do produto" id="preco" name="preco" required value={produto.preco} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Quantidade em Estoque:"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="Quantidade em estoque" id="quantidadeEstoque" name="quantidadeEstoque" required value={produto.quantidadeEstoque} onChange={manipularMudancas}/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a quantidade em estoque!</Form.Control.Feedback>
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
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.setModoEdicao(false);
                            props.setProdutoParaEdicao(produtoVazio); 
                            props.setExibirFormulario(false);
                        }}>
                            Voltar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}