import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class MenuAreaDoCliente extends Component {

  renderCabecalho() {
    return (
      <div>
        <h3>Olá, Dariane, <br/> Seja bem vindo!</h3>
        <p>Por aqui você pode acompanhar seus pedidos e também 
          alterar seus dados de acesso e senha </p>
      </div>
    );
  };

  renderMenu() {
    const url = this.props.router.pathname;
    const estaEmDados = url.includes("/customer-area/data");
    const estaEmAlterarSenha = url.includes("/customer-area/change-password");
    const estaEmPedidos = !estaEmDados && !estaEmAlterarSenha;
    return (
      <div className="menu-lateral">
        <Link href="/customer-area">
          <div className={`menu-lateral-item ${estaEmPedidos ? "menu-lateral-item-active" : ""}`}>
            <span>MEUS PEDIDOS</span>
          </div>
        </Link>
        <Link href="/customer-area/data">
          <div className={`menu-lateral-item ${estaEmDados ? "menu-lateral-item-active" : ""}`}>
            <span>MEUS DADOS</span>
          </div>
        </Link>
        <Link href="/customer-area/change-password">
          <div className={`menu-lateral-item ${estaEmAlterarSenha ? "menu-lateral-item-active" : ""}`} >
            <span>ALTERAR SENHA</span>
          </div>
        </Link>
        <div className="menu-lateral-item" onClick={() => alert('logout!')}>
          <span>SAIR</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="flex-1 flex vertical">
        { this.renderCabecalho() }
        { this.renderMenu() }
      </div>
    );
  };
};

export default withRouter(MenuAreaDoCliente);