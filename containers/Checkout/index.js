import React, { Component } from 'react';

import DadosCliente from './DadosCliente';
import DadosEntrega from './DadosEntrega';
import SubmitDadosCliente from './SubmitDadosCliente';
import DadosFrete from './DadosFrete';
import DadosPagamento from './DadosPagamento';
import DadosPedido from './DadosPedido';
import CheckoutButton from './CheckoutButton';

class CheckoutContainer extends Component {
  render() {
    return (
      <div className="checkout container">
        <div className="componentes-container">
          <DadosCliente />
          <DadosEntrega />
        </div>
        <SubmitDadosCliente />
        {/* <DadosFrete />
        <DadosPagamento />
        <DadosPedido />
        <CheckoutButton /> */}
      </div>
    );
  };
};

export default CheckoutContainer;