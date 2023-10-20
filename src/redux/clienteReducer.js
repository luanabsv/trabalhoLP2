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
            state.listaClientes = state.listaClientes.filter(item => item.cpf !== action.payload.cpf)
        },
        atualizar: (state, action) => {
            const listaTemporariaClientes = state.listaClientes;
            listaTemporariaClientes = listaTemporariaClientes.filter(item => item.cpf !== action.payload.cpf);
            state.listaClientes = [...listaTemporariaClientes, action.payload];
        },
    }
});

export const {adicionar, remover, atualizar} = clienteSlice.actions;
export default  clienteSlice.reducer;