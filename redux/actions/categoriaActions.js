import {
  FETCH_CATEGORIAS
} from '../types';
import axios from 'axios';
import { API, loja } from '../../config';

export const fetchCategorias = () => (dispatch) => {
  axios.get(`${API}/stores/${loja}/categories`)
  .then((response) => dispatch({ type: FETCH_CATEGORIAS, payload: response.data }))
  .catch(e => console.log(e));
}

export default {
  fetchCategorias
};