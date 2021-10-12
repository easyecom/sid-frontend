import React, { Component } from "react";

import DadosFrete from "./DadosFrete";
import DadosPagamento from "./DadosPagamento";
import DadosPedido from "./DadosPedido";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

class CheckoutContainerFinal extends Component {
  orderFinish() {
    return alert("pedido realizado com sucesso");
  }

  render() {
    return (
      <div className="checkout container">
        <div className="checkout-title flex flex-center">
          <h2>Dados de pagamento</h2>
        </div>
        <div className="componentes-container">
          <DadosPagamento />
          <DadosPedido />
        </div>
        <div className="flex flex-right">
          <Link href="/OrderFinishedPage">
            <button
              className="btn btn-cta btn-success"
              onClick={() => this.orderFinish()}
            >
              <span>CONCLUIR PEDIDO</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CheckoutContainerFinal;
