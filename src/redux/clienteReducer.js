import { createSlice } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';

const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaClientes: []
    },
    reducers: {
        // ações
        adicionar: (state, action) => {
            state.listaClientes.push(action.payload);
        },
        remover: (state, action) => {
            state.listaClientes = state.listaClientes.filter(item => item.cpf !== action.payload.cliente.cpf)
        },
        atualizar: (state, action) => {
            const listaTemporariaClientes = listaClientes;
            listaTemporariaClientes = listaTemporariaClientes.filter(item => item.cpf !== action.payload.cliente.cpf);
            state.listaClientes = [...listaTemporariaClientes, action.payload.cliente];
        },
    }
});

export const {adicionar, remover, atualizar} = clienteSlice.actions;
export default  clienteSlice.reducer;