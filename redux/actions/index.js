import authActions from './authActions';
import categoriaActions from './categoriaActions';
import lojaActions from './lojaActions';
import produtoActions from './produtoActions';
import carrinhoActions from './carrinhoActions'
import clientActions from './clientActions'

export default {
  ...authActions,
  ...clientActions,
  ...categoriaActions,
  ...lojaActions,
  ...produtoActions,
  ...carrinhoActions
};