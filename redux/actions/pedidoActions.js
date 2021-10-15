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
  if (payload.opcaoPagamentoSelecionado === "boleto") {
    console.log(payload, "if boleto");
    const orderBoleto = {
      cart: payload.cart,
      deliveryData: {
        cost: payload.cost,
        deadline: payload.deadline,
        type: payload.type,
        addressDelivery: {},
      },
      paymentData: {
        type: "BOLETO",
        value: 125,
        address: {
          country: "Brasil",
          region: "Sao Paulo",
          region_code: "sp",
          city: "Sao Paulo",
          postal_code: "08773-380",
          street: "Av Ipiranga",
          number: "100",
          locality: "pimnetas",
        },
      },
      cancel: false,
    };
  }

  if (payload.opcaoPagamentoSelecionado === "cartao") {
    console.log(payload, "if cartão");
    const orderCreditCard = {
      cart: [
        {
          product_id: 3,
          variation_id: 3,
          staticalProduct: "2",
          amount: 2,
        },
      ],
      deliveryData: {
        cost: 25,
        deadline: 5,
        type: "PAC",
        addressDelivery: {},
      },
      paymentData: {
        type: "CREDIT_CARD",
        installment: 1,
        value: 125,
        card: [
          {
            number: "4111111111111111",
            exp_month: "03",
            exp_year: "2026",
            security_code: "123",
            holder: {
              name: "Jose da Silva",
            },
          },
        ],
      },
      cancel: false,
    };

    return;
    axios
      .post(`${API}/stores/${loja}/orders`, { cpf: String(cpf) }, getHeaders)
      .then((response) => {
        dispatch({ type: CREATE_ORDER, payload: response.data });
      })
      .catch((e) => console.log(e));
  }
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
