import {
  FETCH_CLIENTE,
  LOGOUT_CLIENTE,
  NEW_USER,
  NEW_CLIENT,
  NEW_ADDRESS,
} from "../types";
import axios from "axios";
import { API, versao, loja } from "../../config";
import { setCookie, getCookie } from "../../utils/cookie";
import { getHeaders } from "./helpers";
import Router from "next/router";
import { autenticar, desautenticar } from "./authActions";
import errorHandling from "./errorHandling";

export const getRawData = (data) => {
  let _data = data.split("/");
  let ano = _data[2];
  let _mes = _data[1];
  let mes = _mes < 10 ? "0" + _mes : _mes;
  let _dia = Number(_data[0]) + 1;
  let dia = _dia < 10 ? "0" + _dia : _dia;
  return `${ano}-${mes}-${dia}`;
};

export const fetchClient = (id, token) => (dispatch) => {
  axios
    .get(`${API}/stores/1/clients/${id}`, getHeaders(token))
    .then((response) => {
      dispatch({ type: FETCH_CLIENTE, payload: response.data });
    })
    .catch((e) => console.log(e));
};

export const newClient = (payload, store_id, cb) => (dispatch) => {
  axios
    .post(`${API}/stores/${store_id}/clients`, {
      userName: payload.userName,
      email: payload.email,
      password: payload.password,
      cpf: payload.cpf,
      dateOfBirth: getRawData(payload.dateOfBirth),
      address: {
        zipcode: payload.zipcode,
        street: payload.street,
        number: payload.number,
        complement: payload.complement,
        neighborhood: payload.neighborhood,
        city: payload.city,
        state: payload.street,
        state_code: payload.state_code,
        country: payload.country,
        storeIdToAddress: payload.storeIdToAddress,
      },
    })
    .then((response) => {
      dispatch({ type: NEW_CLIENT, payload: response.data });
      // dispatch(autenticar({ email: form.email, password: form.senha }, null, cb));
      cb(null);
    })
    .catch((e) => cb(errorHandling(e)));
};

export const newAddress = (store_id, payload, token, cb) => (dispatch) => {
  axios
    .post(
      `${API}/${store_id}/addresses`,
      {
        zipcode: payload.zipcode,
        street: payload.street,
        number: payload.number,
        complement: payload.complement,
        neighborhood: payload.neighborhood,
        city: payload.city,
        state: payload.state,
        state_code: payload.state_code,
        country: payload.country,
        storeIdToAddress: payload.storeIdToAddress,
      },
      getHeaders(token)
    )
    .then((response) => {
      console.log(response, "address");
      dispatch({ type: NEW_ADDRESS, payload: response.data });
      // dispatch(autenticar({ email: form.email, password: form.senha }, null, cb));
      // cb(null);
    })
    .catch((e) => cb(errorHandling(e)));
};

export const logoutClient = () => (dispatch) => {
  // dispatch(desautenticar());
  dispatch({ type: LOGOUT_CLIENTE });
};

export default {
  fetchClient,
  newClient,
  newAddress,
  logoutClient,
};
