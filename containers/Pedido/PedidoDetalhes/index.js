import React, { Component } from 'react';

import DadosDoPedido from './DadosDoPedido';
// import DetalhesDaEntrega from './DetalhesDaEntrega';
// import DetalhesDoPagamento from './DetalhesDoPagamento';

class PedidoDetalhes extends Component {

  render() {
    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>PEDIDO #6KF789AB</h2>
        <br/>
        <div>
          <DadosDoPedido />
        </div>
        <br/><br/>
        {/* <div className="flex horizontal">
          <DetalhesDaEntrega />
          <DetalhesDoPagamento />
        </div> */}
      </div>
    );
  };
};

export default PedidoDetalhes;