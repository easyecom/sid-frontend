import {
  FETCH_PRODUTOS
} from '../types';

const initialState = {
  produtos: null
};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRODUTOS:
      return {
        ...state,
        produtos: action.payload
      }
    default:
      return state;
  }
}