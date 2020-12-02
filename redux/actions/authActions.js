import { 
  AUTENTICAR_TOKEN, 
  USER
} from '../types';
import axios from 'axios';
import { API } from '../../config';

const getHeaders = (token) => ({ headers: { "Authorization": `Ecommerce ${token}` } });

export const reauthenticate = token => ({ type: AUTENTICAR_TOKEN, payload: token });

export const getUser = ({ token }) => (dispatch) => {
  axios.get(`${API}/users/dev`, getHeaders(token))
  .then((response) => dispatch({ type: USER, payload: response.data.user }))
  .catch(e => console.log(e))
};

export default {
  reauthenticate,
  getUser
};