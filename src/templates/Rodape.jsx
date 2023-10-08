export default function Rodape(props){
    return (
        <footer style={{position: 'absolute', bottom: '0', left: '0', width: '100%'}}>
            <div style={{
                            background: '#161719',
                            border:'1px solid black',
                            padding:'15px 5px',
                            color: '#a7acb1'
                        }}>
                <p style={{margin: '0', textAlign: 'center'}} >{props.conteudo||"Rodapé do sistema."}</p>
            </div>
        </footer>
    )
}
