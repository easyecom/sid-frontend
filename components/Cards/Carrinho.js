import React, { Component } from "react";
import Link from "next/link";
import DataContext from "../../containers/Context/DataContext";
import { getCountItemsCart } from "../../utils/cart";

class CardCarrinho extends Component {
  static contextType = DataContext;

  state = { cartQtd: 0 };

  componentDidMount() {
    this.setState({ cartQtd: getCountItemsCart() });
    console.log("Didmount", this.state.cartQtd);
  }

  componentDidUpdate() {
    if (this.state.cartQtd !== this.context.state.qtd) {
    this.setState({ cartQtd: this.context.state.qtd });
    }
  }

  render() {
    return (
      <div className="itens-cabecalho flex-2 flex flex-center">
        <Link href="/customer-area">
          <div className="item-cabecalho">
            <i className="fa fa-user-o"></i>
            <span>Minha Conta</span>
          </div>
        </Link>
        <Link href="/cart">
          <div className="item-cabecalho cart">
            <i className="fa fa-shopping-cart"></i>
            <span>{this.state.cartQtd || 0}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default CardCarrinho;
