import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

class MenuAreaDoCliente extends Component {
  componentDidMount() {
    const { usuario, token, cliente } = this.props;
    if (usuario && token && !cliente) {
      this.props.fetchClient(usuario.userId, token);
    }
  }
  
  componentDidUpdate() {
    const { usuario, token, cliente } = this.props;
    
    if (usuario && token && !cliente) {
      this.props.fetchClient(usuario.userId, token);
    }
  }
  
  fetchCliente() {
    const { usuario, token, cliente } = this.props;
    
    if (usuario && token && !cliente) {
      this.props.fetchClient(usuario.userId, token);
    }
  }
  
  renderCabecalho() {
    const { usuario } = this.props;

    return (
      <div>
        <h3>{`Olá ${usuario ? usuario.userName : ""}`}</h3>
      </div>
    );
  }

  renderMenu() {
    const url = this.props.router.pathname;
    const estaEmDados = url.includes("/customer-area/data");
    const estaEmAlterarSenha = url.includes("/customer-area/change-password");
    const estaEmPedidos = !estaEmDados && !estaEmAlterarSenha;
    return (
      <div className="menu-lateral">
        <Link href="/customer-area">
          <div
            className={`menu-lateral-item ${
              estaEmPedidos ? "menu-lateral-item-active" : ""
            }`}
          >
            <span>MEUS PEDIDOS</span>
          </div>
        </Link>
        <Link href="/customer-area/data">
          <div
            className={`menu-lateral-item ${
              estaEmDados ? "menu-lateral-item-active" : ""
            }`}
          >
            <span>MEUS DADOS</span>
          </div>
        </Link>
        <Link href="/customer-area/change-password">
          <div
            className={`menu-lateral-item ${
              estaEmAlterarSenha ? "menu-lateral-item-active" : ""
            }`}
          >
            <span>ALTERAR SENHA</span>
          </div>
        </Link>
        <div className="menu-lateral-item" onClick={() => alert("logout!")}>
          <span>SAIR</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex-1 flex vertical">
        {this.renderCabecalho()}
        {this.renderMenu()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente,
});

export default connect(mapStateToProps, actions)(withRouter(MenuAreaDoCliente));
