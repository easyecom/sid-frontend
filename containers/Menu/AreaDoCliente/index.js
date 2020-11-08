import React, { Component } from 'react';
import Link from 'next/link';

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
    return (
      <div className="menu-lateral">
        <Link href="/customer-area">
          <div className="menu-lateral-item">
            <span>MEUS PEDIDOS</span>
          </div>
        </Link>
        <Link href="/customer-area/data">
          <div className="menu-lateral-item">
            <span>MEUS DADOS</span>
          </div>
        </Link>
        <Link href="/customer-area/change-password">
          <div className="menu-lateral-item">
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

export default MenuAreaDoCliente;