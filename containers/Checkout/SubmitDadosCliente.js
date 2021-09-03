import React, { Component } from 'react';

class SubmitDadosCliente extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-right">
          <button 
            className="btn btn-success btn-cta"
            onClick={() => console.log('Continuar pedido')}>
              IR PARA PAGAMENTO
          </button>
        </div>
      </div>
    );
  };
};

export default SubmitDadosCliente;