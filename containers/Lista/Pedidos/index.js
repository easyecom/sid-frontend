import React, { Component } from "react";

import Pedidos from "../../../components/Listas/Pedidos";
import Paginacao from "../../../components/Paginacao";
import actions from "../../../redux/actions";
import { connect } from "react-redux";

class ListaPedidos extends Component {
  state = { atual: 0 };

  componentDidMount() {
    this.fetchPedidos();
  }

  componentDidUpdate() {
    const { pedidos } = this.props;
    if (!pedidos) this.fetchPedidos();
  }

  fetchPedidos() {
    const { token, pedidos } = this.props;
    console.log(this.props, "pedidos cliente");
    if (token && pedidos) pedidos(1, token);
  }

  render() {
    const { pedidos: orders } = this.props;
    console.log(orders, "pedidos render");

    let PEDIDOS;
    if (orders) {
      PEDIDOS = orders.map((order) => {
        return {
          id: order.orderId,
          data: order.created_at,
          valor: order.total,
          status: order.status,
        };
      });
    }

    if (!orders || orders == null) PEDIDOS = null;

    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS PEDIDOS</h2>
        <br />
        <Pedidos pedidos={PEDIDOS} />
        {/* <Paginacao
          atual={this.state.atual || 0}
          total={PEDIDOS.length * 4}
          limite={PEDIDOS.length}
          onClick={(numeroAtual) => this.setState({ atual: numeroAtual })} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pedidos: state.pedido.pedidos,
  token: state.auth.token,
  // usuario: state.auth.usuario,
  // cliente: state.cliente.cliente
});

export default connect(mapStateToProps, actions)(ListaPedidos);
