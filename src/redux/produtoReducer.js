import { createSlice } from "@reduxjs/toolkit";

const produtoSlice = createSlice({
  name: 'produto',
  initialState: {
    status: ESTADO.OCIOSO,
    mensagem: '',
    listaProdutos: []
  },
  reducers: {
    adicionarProduto: (state, action) => {
      state.listaProdutos.push(action.payload);
    },
    removerProduto: (state, action) => {
      state.listaProdutos = state.listaProdutos.filter(produto => produto.id !== action.payload.id);
    },
    atualizarProduto: (state, action) => {
      const listaTemporariaProdutos = state.listaProdutos.filter(produto => produto.id !== action.payload.id);
      state.listaProdutos = [...listaTemporariaProdutos, action.payload];
    }
  }
});

export const { adicionarProduto, removerProduto, atualizarProduto } = produtoSlice.actions;
export default produtoSlice.reducer;