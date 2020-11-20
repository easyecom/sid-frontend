import axios from 'axios';
import {
  FETCH_PRODUTOS
} from '../types';
import { API, loja } from '../../config';

export const fetchProdutosPaginaInicial = () => (dispatch) => {
  axios.get(`${API}/stores/${loja}/variations`)
  // ${API}/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${4}&sortType=${preco-crescente}
  .then((response) => dispatch({ type: FETCH_PRODUTOS, payload: response.data }))
  .catch(e => console.log(e));
}

export default {
  fetchProdutosPaginaInicial
};