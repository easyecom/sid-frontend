import React, { Component } from "react";

class CheckoutButton extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="flex flex-right">
        <button className="btn btn-cta btn-success">
          <span>CONCLUIR PEDIDO</span>
        </button>
      </div>
    );
  }
}

export default CheckoutButton;
