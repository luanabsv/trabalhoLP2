import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProduto(props) {
    function excluirProduto(produto) {
        if (window.confirm('Deseja realmente excluir esse fornecedor?')) {
            props.setListaProdutos(
                props.listaProdutos.filter((itemLista => itemLista.nome !== produto.nome))
            );
        }
    }
    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'end', marginBottom: '15px'}}>
                <Button type="button" variant="info" onClick={()=>{
                    props.setExibirFormulario(true);
                }}>Novo Produto</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Estoque</th>
                        <th>Fornecedor</th>
                        <th>Categoria do produto</th>
                    </tr>
                </thead>
                <tbody>
                {
                        props.listaProdutos.map((produto) => {
                            return (<tr key={produto.nome}>
                                <td>{produto.estoque}</td>
                                <td>{produto.fornecedor}</td>
                                <td>{produto.categoria}</td>
                                <td>
                                    <Button variant="danger" onClick={() => {
                                        excluirProduto(produto);
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash"
                                            viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </Button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}