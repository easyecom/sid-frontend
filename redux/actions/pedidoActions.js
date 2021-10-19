import {
  FETCH_PEDIDOS,
  FETCH_PEDIDO,
  CLEAN_PEDIDO,
  CANCELAR_PEDIDO,
  CREATE_ORDER,
} from "../types";
import axios from "axios";
import { API, versao, loja } from "../../config";
import errorHandling from "./errorHandling";
import { getHeaders } from "./helpers";

export const createOrder = (payload) => (dispatch) => {
  let order;
  if (payload.opcaoPagamentoSelecionado === "boleto") {
    console.log(payload, "if boleto");
    order = {
      cart: payload.cart,
      deliveryData: {
        cost: payload.cost,
        deadline: payload.deadline,
        type: payload.type,
        addressDelivery: {},
      },
      paymentData: {
        type: "BOLETO",
        value: payload.value,
        address: {
          country: payload.country,
          region: payload.state,
          region_code: payload.state_code,
          city: payload.city,
          postal_code: payload.zipcode,
          street: payload.street,
          number: payload.number,
          locality: payload.neighborhood,
        },
      },
      cancel: false,
    };
  }

  if (payload.opcaoPagamentoSelecionado === "cartao") {
    console.log(payload, "if cartão");
    order = {
      cart: payload.cart,
      deliveryData: {
        cost: payload.cost,
        deadline: payload.deadline,
        type: payload.type,
        addressDelivery: {},
      },
      paymentData: {
        type: "CREDIT_CARD",
        installment: payload.installment,
        value: payload.value,
        card: [
          {
            number: payload.numeroCartao,
            exp_month: payload.mesCartao,
            exp_year: payload.anoCartao,
            security_code: payload.CVCartao,
            holder: {
              name: payload.holderName,
            },
          },
        ],
      },
      cancel: false,
    };
  }

  axios
    .post(`${API}/stores/${loja}/orders`,  {
      cart: payload.cart,
      deliveryData: {
        cost: payload.cost,
        deadline: payload.deadline,
        type: payload.type,
        addressDelivery: {},
      },
      paymentData: {
        type: "BOLETO",
        value: payload.value,
        address: {
          country: payload.country,
          region: payload.state,
          region_code: payload.state_code,
          city: payload.city,
          postal_code: payload.zipcode,
          street: payload.street,
          number: payload.number,
          locality: payload.neighborhood,
        },
      },
      cancel: false,
    }, getHeaders(payload.token))
    .then((response) => {
      console.log("RES", response)
      dispatch({ type: CREATE_ORDER, payload: response.data });
    })
    .catch((e) => console.log(e));
};

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
    .get(`${API}/stores/${loja}/orders/me/${id}`, getHeaders(token))
    .then((response) => {
      dispatch({ type: FETCH_PEDIDO, payload: response.data });
    })
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
  createOrder,
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido,
};
