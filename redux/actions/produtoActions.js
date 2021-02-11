import axios from 'axios';
import {
  FETCH_PRODUTOS,
  FETCH_PESQUISA,
  FETCH_PRODUTOS_PESQUISA
} from '../types';
import { API, loja } from '../../config';

export const fetchProdutosPaginaInicial = () => (dispatch) => {
  axios.get(`${API}/stores/${loja}/products`)
  // ${API}/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${4}&sortType=${preco-crescente}
  .then((response) => dispatch({ type: FETCH_PRODUTOS, payload: response.data }))
  .catch(e => console.log(e));
}

export const fetchTermo = (termo) => ({ type: FETCH_PESQUISA, termo });

export const fetchProdutosPesquisa = (termo, atual, limit) => dispatch => {
  axios.get(`${API}/stores/${loja}/products/search/${termo}?page=${atual}&limit=${limit}`)
  .then((response) => dispatch({ type: FETCH_PRODUTOS_PESQUISA, payload: response.data, termo }))
  .catch(e => console.log(e));
}


export default {
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa
};