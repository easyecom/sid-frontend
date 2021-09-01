import { AUTENTICAR_TOKEN, AUTENTICAR, USER } from "../types";
import axios from "axios";
import { API } from "../../config";
import errorHandling from "./errorHandling";
import { setCookie, removeCookie, getCookie } from "../../utils/cookie";

const getHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const reauthenticate = (token) => ({
  type: AUTENTICAR_TOKEN,
  payload: token,
});

export const getUser =
  ({ token }) =>
  (dispatch) => {
    console.log(token, "action token")
    axios
      .get(`${API}/stores/1/clients/5`, getHeaders(token))
      .then((response) => {
        console.log(response, "client");
        dispatch({ type: USER, payload: response.data.user });
      })
      .catch((e) => console.log(e));
  };

export const autenticar =
  ({ email, password }, goTo = false, cb) =>
  (dispatch) => {
    axios
      .post(`${API}/session`, { email, password })
      .then((response) => {
        setCookie("token", response.data.user.token);
        if(goTo) Router.push(goTo);
        dispatch({ type: AUTENTICAR, payload: response.data });
        dispatch(fetchCliente(response.data.user.userId, response.data.user.token));
      })
      .catch((e) => cb(errorHandling(e)));
  };

export default {
  reauthenticate,
  autenticar,
  getUser,
};
