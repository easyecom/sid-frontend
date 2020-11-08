import React, { Component } from 'react';

import Pedidos from '../../../components/Listas/Pedidos';
import Paginacao from '../../../components/Paginacao';

const PEDIDOS = [
  {
    id: 657837,
    data: "04/11/2020",
    valor: 189.55,
    status: "Pago / Entregue"
  },
  {
    id: 657838,
    data: "05/11/2020",
    valor: 255.55,
    status: "Pago / Em Trãnsito"
  },
  {
    id: 657839,
    data: "06/11/2020",
    valor: 155.55,
    status: "Pago / Em Separação"
  },
  {
    id: 6578310,
    data: "07/11/2020",
    valor: 300.20,
    status: "A Pagar / -"
  }
]

class ListaPedidos extends Component {
  state = { atual: 0 }

  render() {
    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS PEDIDOS</h2>
        <br/>
        <Pedidos pedidos={PEDIDOS} />
        <Paginacao
          atual={this.state.atual || 0}
          total={PEDIDOS.length * 4}
          limite={PEDIDOS.length}
          onClick={(numeroAtual) => this.setState({ atual: numeroAtual })} />
      </div>
    );
  };
};

export default ListaPedidos;