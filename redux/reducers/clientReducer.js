import { NEW_USER, NEW_CLIENT, NEW_ADDRESS } from "../types";

const initialState = { token: null, usuario: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return { ...state, newUser: action.payload };
    case NEW_CLIENT:
      return { ...state, newClient: action.payload };
    case NEW_ADDRESS:
      return { ...state, newAddress: action.payload };
    default:
      return state;
  }
};
