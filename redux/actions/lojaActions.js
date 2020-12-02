import axios from 'axios';
import {
  FETCH_DADOS
} from '../types';
import { API, loja } from '../../config';

export const fetchDadosLoja = () => (dispatch) => {
  axios.get(`${API}/stores/${loja}`)
  .then((response) => dispatch({ type: FETCH_DADOS, payload: response.data }))
  console.log(response, "teste")
  .catch(e => console.log(e));
}

export default {
  fetchDadosLoja
};