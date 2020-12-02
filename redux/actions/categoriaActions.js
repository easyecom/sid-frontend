import {
  FETCH_CATEGORIAS
} from '../types';
import axios from 'axios';
import { API, loja } from '../../config';

// export const fetchCategorias = () => (dispatch) => {
//   axios.get(`${API}/stores/${loja}/categories`)
//   .then(response => dispatch({ type: FETCH_CATEGORIAS, payload: response.data.categories }))
//   .catch(e => console.log(e));
// }

export const fetchCategorias = () => (dispatch) => {
  return axios
      .get(`${API}/stores/${loja}/categories`)
      .then(({ data }) => {
        dispatch({ type: FETCH_CATEGORIAS, payload: data.categories });
      })
      .catch((e) => console.log(e));
};

export default {
  fetchCategorias
};