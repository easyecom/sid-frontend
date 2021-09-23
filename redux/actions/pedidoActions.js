import {
  FETCH_PEDIDOS,
  FETCH_PEDIDO,
  CLEAN_PEDIDO,
  CANCELAR_PEDIDO,
} from "../types";
import axios from "axios";
import { API, versao, loja } from "../../config";
import errorHandling from "./errorHandling";
import { getHeaders } from "./helpers";

export const fetchPedidos = (token) => (dispatch) => {
  axios
    .get(`${API}/stores/${loja}/orders/me`, getHeaders(token))
    .then((response) => {
      dispatch({ type: FETCH_PEDIDOS, payload: response.data });
    })
    .catch((e) => console.log(e, "error"));
};

export const fetchPedido = (id, token) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/pedidos/${id}?loja=${loja}`, getHeaders(token))
    .then((response) =>
      dispatch({ type: FETCH_PEDIDO, payload: response.data })
    )
    .catch((e) => console.log(e));
};

export const cancelarPedido = (id, token, cb) => (dispatch) => {
  axios
    .delete(
      `${API}/${versao}/api/pedidos/${id}?loja=${loja}`,
      getHeaders(token)
    )
    .then((response) => {
      dispatch({ type: CANCELAR_PEDIDO, payload: response.data });
      cb(null);
    })
    .catch((e) => cb(errorHandling(e)));
};

export const cleanPedido = () => ({ type: CLEAN_PEDIDO });

export default {
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido,
};
